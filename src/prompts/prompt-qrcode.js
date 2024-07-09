import chalk from "chalk";

const qrCodePrompt = [
    {
        name: "link",
        description: chalk.yellow.bold("Enter the url to generate the QRCode"),
    },
    {
        name: "type",
        description: chalk.yellow.bold("Witch type of QRCode do you prefer? 1- Visual or 2- Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Choose only one option: 1 or 2"),
        required: true,
    },
];

export default qrCodePrompt;