const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
    ac.grant("consultant")
        .readOwn("profile")
        .updateOwn("profile")

    ac.grant("admin")
        .extend("consultant")
        .readAny("profile")
        .updateAny("profile")
        .deleteAny("profile")

    return ac;
})();