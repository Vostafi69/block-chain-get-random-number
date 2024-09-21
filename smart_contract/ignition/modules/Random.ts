import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LockModule = buildModule("RandomModule", (m) => {
  const random = m.contract("Random", []);

  return { random };
});

export default LockModule;
