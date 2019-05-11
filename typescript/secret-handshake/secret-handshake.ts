const possible_commands = ["wink", "double blink", "close your eyes", "jump"];

class HandShake {
  command_list: string[];

  constructor(code: number) {
    this.command_list = possible_commands.filter(
      (_, index) => code & Math.pow(2, index)
    );

    if (code & Math.pow(2, 4)) {
      this.command_list.reverse();
    }
  }

  commands() {
    return this.command_list;
  }

}

export default HandShake;
