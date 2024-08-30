import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xB164B0ac1b738882dE4B41d781F0A38671dE8F6b";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0xD410219f5C87247d3F109695275A70Da7805f1b1
