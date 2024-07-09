import chalk from "chalk";

const mainPrompt = [
    {
        name: "option",
        description: chalk.yellow.bold("Choose one tool (1- QRCODE or 2- Password"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Choose only one option: 1 or 2"),
        required: true,
    },
];

export default mainPrompt;