import Mod from "../build_src/mod.mjs";

export default new Mod(
	"Fog Control",
	"capnkork",
	"Allows the user to adjust the (client) distance at which fogs render or disable them completely. ",
)
.add_version(17)
.add_category("Fog")
.add_link(
	{ host: "modrinth" },
	{ host: "github" }
);
