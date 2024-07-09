import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQRCode from "./services/qrcode/create.js"
import createPassword from "./services/password/create.js";

async function main() {
    prompt.get(mainPrompt, async (err, result) => {
        if (err) console.log(err);

        if (result.option == 1) await createQRCode();
        if (result.option == 2) await createPassword();
    });

    prompt.start();
}

main();