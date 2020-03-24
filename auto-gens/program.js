const inquirer = require("inquirer");
const util = require("util");
const { questions } = require("./questions");
const exec = util.promisify(require("child_process").exec);
const { ncp } = require("ncp");
const fs = require("fs");

module.exports.Program = {
  answers: [],
  loading: null,
  showLoading: function(text) {
    const h = ["|", "/", "-", "\\"];
    let i = 0;
    return setInterval(() => {
      i = i > 3 ? 0 : i;
      console.clear();
      if (text) {
        console.info(`${h[i]} ${text}...`);
      } else {
        console.info(
          `\x1b[34m ${h[i]} Initializing your project: ${this.answers.name}`
        );
      }
      i++;
    }, 300);
  },
  start: function() {
    inquirer.prompt(questions).then(async answers => {
      this.answers = answers;
      await this.run_process();
    });
  },
  run_process: async function() {
    const { pod } = this.answers;
    try {
      await this.init();
      await this.setupReferenceLibraries();
      if (pod) {
        await this.installPod();
      }
      await this.copySourceBase();
    } catch (e) {
      console.clear();
      clearInterval(this.loading);
      console.error(e);
    }
  },
  copySourceBase: async function() {
    this.loading = this.showLoading("Copying the source...");
    const dirRoot = `../${this.answers.name}`;
    const dir = `${dirRoot}/src`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    ncp("rnbase/src", dir);
    ncp("rnbase/react-native.config.js", dirRoot + "/react-native.config.js");
    ncp("rnbase/icon-generate.js", dirRoot + "/icon-generate.js");
    ncp("rnbase/index.js", dirRoot + "/index.js");
    fs.unlink(dirRoot + "/App.js", function() {});
    ncp(
      "rnbase/jsconfig.json",
      dirRoot + "/jsconfig.json",
      await this.linkFont.bind(this)
    );
    clearInterval(this.loading);
  },
  init: async function() {
    const { name } = this.answers;
    this.loading = this.showLoading();
    await exec(`cd .. && react-native init ${name}`);
    clearInterval(this.loading);
  },
  setupReferenceLibraries: async function() {
    const libraries = [
      "axios",
      "lodash",
      "moment",
      "react-native-dates",
      "react-native-dropdownalert",
      "react-navigation",
      "react-navigation-stack",
      "react-native-screens",
      "react-redux",
      "redux",
      "validator",
      "@react-native-community/async-storage",
      "react-native-gesture-handler",
      "react-native-safe-area-context",
      "@react-native-community/masked-view"
    ];

    const { name, icons } = this.answers;
    let libs = libraries.join(" ");
    if (icons) libs += " react-native-vector-icons";
    this.loading = this.showLoading("Setting up libraries...");
    await exec(`cd ../${name} && npm i ${libs}`);
    clearInterval(this.loading);
  },
  installPod: async function() {
    this.loading = this.showLoading("Installing pod...");
    const { name } = this.answers;
    await exec(`cd ../${name}/ios && pod install`);
    clearInterval(this.loading);
  },
  linkFont: async function() {
    this.loading = this.showLoading("Linking font...");
    const { name } = this.answers;
    await exec(`cd ../${name} && react-native link`);
    clearInterval(this.loading);
    console.clear();
    console.log("Well done: )))");
  }
};
