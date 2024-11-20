// Made by anonynmous-exdash  for Maltion. Contact at joeizcooler@gmail.com
(async () => {
  console.log("%c Switching cloud ID", "font-size:40px;");
  try {
    if (!vm)
      var vm = document
        .getElementById("app")
        ._reactRootContainer._internalRoot.current.child.pendingProps.store.getState()
        .scratchGui.vm;

    function SwitchCloud(id = "489159823") {
      vm.runtime.ioDevices.cloud.provider.projectId = id;
      vm.runtime.ioDevices.cloud.provider.connection.close();
    }

    vm.runtime.ioDevices.cloud.setProvider = function (arg) {
      console.log(arg);
      if (!arg == null) {
        vm.runtime.ioDevices.cloud.provider = arg;
        SwitchCloud();
      }
    };

    SwitchCloud();
    console.log("%c Succesfully switched cloud ID", "font-size:40px;");
  } catch (err) {
    console.error(err);
    console.log(
      "%c Something went wrong when switching cloud ID",
      "font-size:40px;",
    );
  }
})();
