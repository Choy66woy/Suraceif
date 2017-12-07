function running(game) {
    console.warn("HALP");
    var cursors;
    var player;
    var platforms;
    var robots;
    var robot;
    var jumpAnimation;

    var playerState = "IDLE";
    var playerFacing = "RIGHT";

    function preload() {
        game.load.image('Backgroundz', 'assets/Backgroundz.jpg');
        game.load.image('Stuff', 'assets/Stuff.png');
        game.load.image('smalls', 'assets/smalls.png');
        game.load.image('jet', 'assets/jet.png');
        game.load.image('star', 'assets/star.png');
        game.load.spritesheet('Running', 'assets/Runstand.png', 50, 50);
        game.load.spritesheet('Shadow', 'assets/Shadow.png', 50, 50);
        game.load.spritesheet('robot', 'assets/robot.png', 50, 50);
        game.load.spritesheet('melee', 'assets/melee.png', 100, 100);
        game.load.spritesheet('shoot', 'assets/shoot.png', 100, 100);
        game.load.spritesheet('pew', 'assets/pew.png', 100, 100);
        game.load.spritesheet('sheet', 'assets/sheet.png', 100, 100);
        game.load.spritesheet('rowat', 'assets/rowat.png', 100, 100);
        game.load.spritesheet('clone', 'assets/clone.png', 100, 100);



    }

    function create() {
        game.world.setBounds(0, 0, 1920, 600);
        game.add.sprite(-300, -300, 'Backgroundz');



        var melee = game.add.sprite(300, 100, 'melee');
        var walk = melee.animations.add('walk');
        melee.animations.add('walk', [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 12, true);
        melee.animations.play('walk');

        var shoot = game.add.sprite(100, 100, 'shoot');
        shoot.animations.add('shooting', [0, 1, 2 , 3, 4, 5, 6, 7], 14, true);
        shoot.animations.play('shooting');

        var A = game.add.sprite(200, 100, 'pew');
        A.animations.add('shot', [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 14, true);
        A.animations.play('shot');

        var stun = game.add.sprite(500, 100, 'sheet');
        stun.animations.add('stun', [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], 12, true);
        stun.animations.play('stun');

        var wot = game.add.sprite(0, 100, 'rowat');
        wot.animations.add('wot', [0, 1, 2 , 3, 4, 5, 6, 7], 10, true);
        wot.animations.play('wot');

        var wat = game.add.sprite(0, 200, 'clone');
        wat.animations.add('wat', [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 98, 99, 100, 101, 102, 103, 104, 105, 106], 18, true);
        wat.animations.play('wat');




        /*
        * Platforms
        */

        platforms = game.add.physicsGroup();
        platforms.create(1200, 500, 'melee');
        platforms.create(1200, 800, 'shoot');
        platforms.create(1200, 500, 'smalls');
        platforms.create(1200, 500, 'smalls');
        platforms.create(650, 645, 'smalls');
        platforms.create(400, 450, 'smalls');
        platforms.create(550, 450, 'smalls');
        platforms.create(600, 450, 'smalls');
        platforms.create(400, 450, 'smalls');
        platforms.create(00, 450, 'smalls');
        platforms.create(650, 450, 'smalls');
        platforms.create(200, 400, 'smalls');
        platforms.create(400, 300, 'smalls');
        platforms.create(600, 230, 'smalls');
        platforms.create(1300, 400, 'smalls');
        platforms.create(1000, 340, 'smalls');



        this.platforms = this.add.physicsGroup();
        this.platforms.create(-300, 225, 'jet');
        this.platforms.create(-300, 100, 'jet');
        this.platforms.setAll('body.velocity.x', 700);

        this.platforms = this.add.physicsGroup();
        this.platforms.create(-300, 200, 'jet');
        this.platforms.create(-300, 125, 'jet');
        this.platforms.setAll('body.velocity.x', 800);

        this.platforms = this.add.physicsGroup();
        this.platforms.create(-300, 150, 'jet');
        this.platforms.setAll('body.velocity.x', 900);





        this.platforms = this.add.physicsGroup();
        this.platforms.create(-2000, 225, 'jet');
        this.platforms.create(-2000, 100, 'jet');
        this.platforms.setAll('body.velocity.x', 780);

        this.platforms = this.add.physicsGroup();
        this.platforms.create(-2000, 200, 'jet');
        this.platforms.create(-2000, 125, 'jet');
        this.platforms.setAll('body.velocity.x', 800);

        this.platforms = this.add.physicsGroup();
        this.platforms.create(-2000, 150, 'jet');
        this.platforms.setAll('body.velocity.x', 840);






        platforms.create(650, 645, 'smalls');
        platforms.create(600, 680, 'Stuff');
        platforms.create(200, 680, 'Stuff');
        platforms.create(0, 680, 'Stuff');
        platforms.create(400, 680, 'Stuff');
        platforms.create(800, 680, 'Stuff');
        platforms.create(800, 600, 'Stuff');
        platforms.create(1000, 520, 'Stuff');
        platforms.create(1000, 520, 'Stuff');
        platforms.create(1200, 520, 'Stuff');
        platforms.create(800, 300, 'Stuff');
        /*
        * Spawn
        */
        platforms.create(0, 500, 'smalls');

        platforms.setAll('body.allowGravity', false);
        platforms.setAll('body.immovable', true);

        /*
        * Robots
        */
        robots = game.add.physicsGroup();

        robot = robots.create(200, game.world.height - 200, 'robot');
        robots.setAll('body.gravity.y', 1000);



        player = game.add.sprite(32, game.world.height - 300, 'Running');
        game.physics.arcade.enable(player);
        player.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7], 12, true);
        player.animations.add('right', [19, 20, 21, 22, 23, 24, 25, 26], 12, true);
        player.animations.add('idle', [8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18], 8, true);
        player.animations.add('land', [34, 35, 36, 8], 8, false);
        jumpAnimation = player.animations.add('jump', [28, 28, 28, 28, 29, 30 ,31, 32, 33, 31, 32, 33, 31, 32, 33, 31, 32, 33], 8, false);
        player.body.setSize(20, 30, 20, 10)


        player.body.bounce.y = 0;
        player.body.gravity.y = 400;

        cursors = game.input.keyboard.createCursorKeys();
        game.camera.follow(player);

        game.add.tween(robot).to( { x: 800 }, 99900,  Phaser.Easing.Linear.None, true);

    }

    function update() {
        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.collide(robots, platforms);
        game.physics.arcade.collide(player, robots);

        /*
        * State Transitions
        */
        if (playerState == "JUMP") {
            if (player.body.touching.down) {
                player.body.velocity.x = 0;
            }
            if (player.body.touching.down) {
                playerState = "IDLE";
            }
        }
        else if (playerState == "JUMP_START") {
            playerState = "JUMP";
        }
        else if (cursors.up.isDown && player.body.touching.down) {
            playerState = "JUMP_START";
        }
        else if (cursors.left.isDown) {
            playerState = "WALK_LEFT";
            playerFacing = "LEFT";
        } 
        else if (cursors.right.isDown) {
            playerState = "WALK_RIGHT";
            playerFacing = "RIGHT";
        } 
        else {
            playerState = "IDLE";
        }

        /*
        * Handle player state
        */
        switch (playerState) {
            case "IDLE":
                player.body.velocity.x = 0;
                player.animations.play('idle');
                break;

            case "WALK_LEFT":
                player.body.velocity.x = -150;
                player.animations.play('left');
                break;

            case "WALK_RIGHT":
                player.body.velocity.x = 150;
                player.animations.play('right');
                break;

            case "JUMP_START":
                player.body.velocity.y = -300;
                player.animations.play('jump')
                break;

            case "JUMP":
                break;

            default:
                throw new Error("Invalid player state")
        }

    }
    function render() {
    }
    return {
        preload,
        create,
        update,
        render
    }
}