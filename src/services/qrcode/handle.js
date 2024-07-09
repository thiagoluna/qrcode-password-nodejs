import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
    if (err) {
        console.log(chalk.red("Error on application."));

        return;
    }

    const isSmall= parseInt(result.type) === 2;
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.blue("QRCode generated successfully!\n"))
        console.log(qrcode);
    });
}

export default handle;