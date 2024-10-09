import "./style.css";
import { testData } from "./tempData";
import { Walkme } from "./walkme";

const button = document.createElement("button");
button.className =
  "dark:text-white p-3 fixed top-2 left-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";
button.innerHTML = "Start";

const walkmeInstance = new Walkme({
  stepData: testData[0],
  onFinish: (stepData) => {
    console.log("Tour finished:", stepData);
  },
  onError: (error) => {
    console.error("Error during tour:", error);
  },
  onSkip: (stepData) => {
    console.log("Tour skipped:", stepData);
  },
});

button.onclick = () => {
  console.log("Tour started");
  walkmeInstance.start();
};
document.body.appendChild(button);
