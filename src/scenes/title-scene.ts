import * as Phaser from "phaser";
import { SCENE_KEYS } from "./common";

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_KEYS.TITLE });
  }

  public preload(): void {}

  public create(): void {
    this.scene.start(SCENE_KEYS.GAME);
  }
}

export { TitleScene };
