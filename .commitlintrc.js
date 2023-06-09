import { rules } from "@commitlint/config-angular";

const [, , typeEnum] = rules["type-enum"];

export default {
  extends: ["@commitlint/config-angular"],
  rules: {
    "header-max-length": [0, "always", 106],
    "type-enum": [2, "always", [...typeEnum, "chore", "ref", "add", "enhance"]],
    "type-case": [1, "always", ["lower-case", "upper-case"]],
    "body-max-line-length": [0, "always", "Infinity"],
  },
};
