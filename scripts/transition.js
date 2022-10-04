function changeView() {

    $(".menu").remove();

    let gameWorld = $("<div/>").attr('class', 'gameWorld').appendTo('body');
    let map = $("<div/>").attr("id", "map").appendTo("body");
    let audio = $("<div/>").attr('class', 'audio').appendTo('body');
    let audioPlay = $("<audio loop>").appendTo(document.querySelector('.gameWorld'));

    $(".gameWorld").append($("<img>").attr("src", "images/level.jpg"))

    audioPlay[0].src = 'gameAudio.mp3';
    audioPlay[0].play();

    audio.text('Music on');

    audio.click(() => {
        if (audio.text() == 'Music on') {
            audio.text('Music off');
            audioPlay[0].pause();
        }
        else if (audio.text() == 'Music off') {
            audio.text("Music on");
            audioPlay[0].play();
        }
    });

    let blockDiv_1 = $("<div/>").attr("id", "blockDiv_1").appendTo(".gameWorld");
    let blockDiv_2 = $("<div/>").attr("id", "blockDiv_2").appendTo(".gameWorld");
    let blockDiv_3 = $("<div/>").attr("id", "blockDiv_3").appendTo(".gameWorld");
    let blockDiv_4 = $("<div/>").attr("id", "blockDiv_4").appendTo(".gameWorld");
    let blockDiv_5 = $("<div/>").attr("id", "blockDiv_5").appendTo(".gameWorld");
    let blockDiv_6 = $("<div/>").attr("id", "blockDiv_6").appendTo(".gameWorld");
    let blockDiv_7 = $("<div/>").attr("id", "blockDiv_7").appendTo(".gameWorld");
    let blockDiv_8 = $("<div/>").attr("id", "blockDiv_8").appendTo(".gameWorld");
    let blockDiv_9 = $("<div/>").attr("id", "blockDiv_9").appendTo(".gameWorld");
    let blockDiv_10 = $("<div/>").attr("id", "blockDiv_10").appendTo(".gameWorld");
    let blockDiv_11 = $("<div/>").attr("id", "blockDiv_11").appendTo(".gameWorld");
    let blockDiv_12 = $("<div/>").attr("id", "blockDiv_12").appendTo(".gameWorld");
    let blockDiv_13 = $("<div/>").attr("id", "blockDiv_13").appendTo(".gameWorld");
    let blockDiv_14 = $("<div/>").attr("id", "blockDiv_14").appendTo(".gameWorld");
    let blockDiv_15 = $("<div/>").attr("id", "blockDiv_15").appendTo(".gameWorld");
    let blockDiv_16 = $("<div/>").attr("id", "blockDiv_16").appendTo(".gameWorld");
    let blockDiv_17 = $("<div/>").attr("id", "blockDiv_17").appendTo(".gameWorld");
    let blockDiv_18 = $("<div/>").attr("id", "blockDiv_18").appendTo(".gameWorld");
    let blockDiv_19 = $("<div/>").attr("id", "blockDiv_19").appendTo(".gameWorld");
    let blockDiv_20 = $("<div/>").attr("id", "blockDiv_20").appendTo(".gameWorld");
    let blockDiv_21 = $("<div/>").attr("id", "blockDiv_21").appendTo(".gameWorld");
    let blockDiv_22 = $("<div/>").attr("id", "blockDiv_22").appendTo(".gameWorld");

    let lava_1 = $("<div/>").attr("id", "lava_1").appendTo(".gameWorld");
    let lava_2 = $("<div/>").attr("id", "lava_2").appendTo(".gameWorld");
    let lava_3 = $("<div/>").attr("id", "lava_3").appendTo(".gameWorld");
    let lava_4 = $("<div/>").attr("id", "lava_4").appendTo(".gameWorld");

    let rectangle_1 = $("<div/>").attr("id", "rectangle_1").appendTo(".gameWorld");
    let rectangle_2 = $("<div/>").attr("id", "rectangle_2").appendTo(".gameWorld");
    let rectangle_3 = $("<div/>").attr("id", "rectangle_3").appendTo(".gameWorld");
    let rectangle_4 = $("<div/>").attr("id", "rectangle_4").appendTo(".gameWorld");
    let rectangle_5 = $("<div/>").attr("id", "rectangle_5").appendTo(".gameWorld");
    let rectangle_6 = $("<div/>").attr("id", "rectangle_6").appendTo(".gameWorld");
    let rectangle_7 = $("<div/>").attr("id", "rectangle_7").appendTo(".gameWorld");

    let coin_1 = $("<div/>").attr("id", "coin_1").appendTo(".gameWorld");
    let coin_2 = $("<div/>").attr("id", "coin_2").appendTo(".gameWorld");
    let coin_3 = $("<div/>").attr("id", "coin_3").appendTo(".gameWorld");

    let minimaus = $("<div/>").attr("id", "minimaus").appendTo(".gameWorld");

    let thorn_1 = $("<div/>").attr("id", "thorn_1").appendTo(".gameWorld");
    let thorn_2 = $("<div/>").attr("id", "thorn_2").appendTo(".gameWorld");
    let thorn_3 = $("<div/>").attr("id", "thorn_3").appendTo(".gameWorld");
    let thorn_4 = $("<div/>").attr("id", "thorn_4").appendTo(".gameWorld");

    let enemy_1 = $("<div/>").attr("id", "enemy_1").attr("class", "enemy").appendTo(".gameWorld");
    let enemy_2 = $("<div/>").attr("id", "enemy_2").attr("class", "enemy").appendTo(".gameWorld");
    let enemy_3 = $("<div/>").attr("id", "enemy_3").attr("class", "enemy").appendTo(".gameWorld");

    var pl1 = new player("player");

    function charMovement(e) {
        pl1.directions[e.which] = true;	
    }

    function stop(e) {
        delete pl1.directions[e.which];
    }
    $('html').keyup(stop).keydown(charMovement);

    var interval = setInterval(pl1.move, 20);

    var Enemy_1 = new Enemy("enemy_1");
    var Enemy_2 = new Enemy("enemy_2");
    var Enemy_3 = new Enemy("enemy_3");

    function Enemy(id) {
        var that = this;
        this.speedY = 4;
        this.Ee = $("#" + id);
        console.log(this.Ee);
        this.stop = 0;
        this.move = function () {
            that.stop++;
            that.Ee.css("left", that.Ee.position().left + that.speedY);
            if (that.stop == 25) {
                that.speedY = -that.speedY;
                that.stop = 0;
            }
        }
        this.interval = setInterval(that.move, 30);
    }

    function player() {
        this.lives = 2;
        // this.livesDiv = $('<div/>').attr('class', 'live').appendTo('.gameWorld');
        // this.livesDiv.text('Lives: ' + this.lives);
        this.count = 0;
        this.imageCounter = 1;
        this.speedY = 9;
        this.speedX = 4;
        this.playerImg = $("<div/>").attr("class", "Player").appendTo(".gameWorld");
        this.walls = [$("#blockDiv_1"), $("#blockDiv_2"), $("#blockDiv_3"), $("#blockDiv_4"), $("#blockDiv_5"),
        $("#blockDiv_6"), $("#blockDiv_7"), $("#blockDiv_8"), $("#blockDiv_9"), $("#blockDiv_10"),
        $("#blockDiv_11"), $("#blockDiv_12"), $("#blockDiv_13"), $("#blockDiv_14"), $("#blockDiv_15"),
        $("#blockDiv_16"), $("#blockDiv_17"), $("#blockDiv_18"), $("#blockDiv_19"), $("#blockDiv_20"), $("#blockDiv_21")];
        this.coin = [$("#coin_1"), $("#coin_2"), $("#coin_3")];
        this.money = 0;
        this.score = $('<div/>').attr('class', 'coin').appendTo('body');
        this.score.text('Coin: ' + this.money);
        this.lava = [$("#lava_1"), $("#lava_2"), $("#lava_3"), $("#lava_4")];
        this.thorn = [$("#thorn_1"), $("#thorn_2"), $("#thorn_3"), $("#thorn_4")];
        this.enemy = [$("#enemy_1"), $("#enemy_2"), $("#enemy_3")];
        this.minimaus = [$("#minimaus")];
        this.directions = {};
        this.lastDirection = "down";
        this.directions = {};
        var that = this;
        this.moveleft = true;
        this.liveRestart = function () {
            $(".Player").remove();

            var pl1 = new player();

            function charMovement(e) {
                pl1.directions[e.which] = true;
            }

            function stop(e) {
                delete pl1.directions[e.which];
            }
            $('html').keyup(stop).keydown(charMovement);

            var interval = setInterval(pl1.move, 20);

            console.log(this.lives);
        };

        this.over = function () {
            clearInterval(interval);
            $("body").empty();
            $("<h2>").text("Game Over").appendTo("body");
            let buttonPlay = $("<button/>").attr("id", "setTimeout").appendTo(document.querySelector('body'));
            let Start = $("#setTimeout");

            buttonPlay.text('Play again');
            Start.click(changeView);

        }

        this.win = function () {
            clearInterval(interval);
            $("body").empty();
            $("<h2>").text("You Win").appendTo("body");

            let buttonPlay = $("<button/>").attr("id", "setTimeout").appendTo(document.querySelector('body'));
            let Start = $("#setTimeout");

            buttonPlay.text('Play again');
            Start.click(changeView);
        }

        this.speedX = 4;
        this.speedY = 0;
        this.gravity = 0.2;
        this.jumpState = true;

        this.STATIC_HOR_CENTER;
        this.STATIC_VER_CENTER;

        this.WIDTH_DIFFERENCE;
        this.HEIGHT_DIFFERENCE;

        this.playerImg_HOR_CENTER;
        this.playerImg_VER_CENTER;

        this.checkCollision = function () {
            for (var i in that.walls) {
                that.STATIC_HOR_CENTER = that.walls[i].position().left + that.walls[i].width() / 2;
                that.STATIC_VER_CENTER = that.walls[i].position().top;

                that.WIDTH_DIFFERENCE = that.playerImg.width() / 2 + that.walls[i].width() / 2;

                that.playerImg_HOR_CENTER = that.playerImg.position().left + that.playerImg.width() / 2;
                that.playerImg_VER_CENTER = that.playerImg.position().top + that.playerImg.height();

                if (Math.abs(that.playerImg_HOR_CENTER - that.STATIC_HOR_CENTER) <= that.WIDTH_DIFFERENCE &&
                    Math.abs(that.playerImg_VER_CENTER - that.STATIC_VER_CENTER) <= 5) {
                    $("#status").text("TRUE");
                    that.jumpState = false;
                    that.playerImg.css("top", that.walls[i].position().top - that.playerImg.height());
                    that.speedY = 9;
                    break;
                } else {
                    $("#status").text("FALSE")
                    if (that.jumpState == false) {
                        that.speedY = 0;
                        that.jumpState = true;
                    }
                }
            }
        }

        this.checkCollisionLeft = function () {
            for (var i = 0; i < that.walls.length; i++) {
                that.STATIC_HOR_CENTER = that.walls[i].position().left + that.walls[i].width();
                that.STATIC_VER_CENTER = that.walls[i].position().top + that.walls[i].height() / 2;

                that.WIDTH_DIFFERENCE = that.playerImg.width() / 2 + that.walls[i].width() / 2;
                that.HEIGHT_DIFFERENCE = that.playerImg.height() / 2 + that.walls[i].height() / 2;

                that.playerImg_HOR_CENTER = that.playerImg.position().left;
                that.playerImg_VER_CENTER = that.playerImg.position().top + that.playerImg.height() / 2;

                if (Math.abs(that.playerImg_HOR_CENTER - that.STATIC_HOR_CENTER) <= 5 &&
                    Math.abs(that.playerImg_VER_CENTER - that.STATIC_VER_CENTER) <= that.HEIGHT_DIFFERENCE) {

                    that.moveleft = false;
                    //that.jumpState = false;
                    console.log("left");
                    //break;
                }
            }
        }

        this.checkCollisionRight = function () {
            for (var i in that.walls) {
                that.STATIC_HOR_CENTER = that.walls[i].position().left;
                that.STATIC_VER_CENTER = that.walls[i].position().top + that.walls[i].height() / 2;

                that.WIDTH_DIFFERENCE = that.playerImg.width() / 2 + that.walls[i].width() / 2;
                that.HEIGHT_DIFFERENCE = that.playerImg.height() / 2 + that.walls[i].height() / 2;

                that.playerImg_HOR_CENTER = that.playerImg.position().left + that.playerImg.width();
                that.playerImg_VER_CENTER = that.playerImg.position().top + that.playerImg.height() / 2;

                if ((Math.abs(that.playerImg_HOR_CENTER - that.STATIC_HOR_CENTER) <= 5 &&
                    Math.abs(that.playerImg_VER_CENTER - that.STATIC_VER_CENTER) <= that.HEIGHT_DIFFERENCE)) {
                    that.moveright = false;
                    // that.jumpState = false; 
                    console.log("right");
                }
            }
        }

        this.checkCollisionLava = function () {
            for (var i in that.lava) {
                that.STATIC_HOR_CENTER = that.lava[i].position().left + that.lava[i].width() / 2;
                that.STATIC_VER_CENTER = that.lava[i].position().top;

                that.WIDTH_DIFFERENCE = that.playerImg.width() / 2 + that.lava[i].width() / 2;

                that.playerImg_HOR_CENTER = that.playerImg.position().left + that.playerImg.width() / 2;
                that.playerImg_VER_CENTER = that.playerImg.position().top + that.playerImg.height();

                if (Math.abs(that.playerImg_HOR_CENTER - that.STATIC_HOR_CENTER) <= that.WIDTH_DIFFERENCE &&
                    Math.abs(that.playerImg_VER_CENTER - that.STATIC_VER_CENTER) <= 5) {
                    // this.lives-=1;  
                    // this.livesDiv.text('Lives: ' + this.lives); 
                    // that.liveRestart();
                    that.over();
                    break;
                }
            }
        }

        this.checkCollisionThorn = function () {
            for (var i in that.thorn) {
                that.STATIC_HOR_CENTER = that.thorn[i].position().left + that.thorn[i].width() / 2;
                that.STATIC_VER_CENTER = that.thorn[i].position().top;

                that.WIDTH_DIFFERENCE = that.playerImg.width() / 2 + that.thorn[i].width() / 2;

                that.playerImg_HOR_CENTER = that.playerImg.position().left + that.playerImg.width() / 2;
                that.playerImg_VER_CENTER = that.playerImg.position().top + that.playerImg.height();

                if (Math.abs(that.playerImg_HOR_CENTER - that.STATIC_HOR_CENTER) <= that.WIDTH_DIFFERENCE &&
                    Math.abs(that.playerImg_VER_CENTER - that.STATIC_VER_CENTER) <= 5) {
                    that.over();
                    break;
                }
            }
        }

        this.checkCollisionEnemyDead = function () {
            for (var i in that.enemy) {
                that.STATIC_HOR_CENTER = that.enemy[i].position().left + that.enemy[i].width() / 2;
                that.STATIC_VER_CENTER = that.enemy[i].position().top;

                that.WIDTH_DIFFERENCE = that.playerImg.width() / 2 + that.enemy[i].width() / 2;

                that.playerImg_HOR_CENTER = that.playerImg.position().left + that.playerImg.width() / 2;
                that.playerImg_VER_CENTER = that.playerImg.position().top + that.playerImg.height();

                if (Math.abs(that.playerImg_HOR_CENTER - that.STATIC_HOR_CENTER) <= that.WIDTH_DIFFERENCE &&
                    Math.abs(that.playerImg_VER_CENTER - that.STATIC_VER_CENTER) <= 5) {
                    that.enemy[i].remove();
                    break;
                }
            }
        }

        this.checkCollisionEnemyLeft = function () {
            for (var i in that.enemy) {
                that.STATIC_HOR_CENTER = that.enemy[i].position().left;
                that.STATIC_VER_CENTER = that.enemy[i].position().top + that.enemy[i].height() / 2;

                that.WIDTH_DIFFERENCE = that.playerImg.width() / 2 + that.enemy[i].width() / 2;
                that.HEIGHT_DIFFERENCE = that.playerImg.height() / 2 + that.enemy[i].height() / 2;

                that.playerImg_HOR_CENTER = that.playerImg.position().left + that.playerImg.width();
                that.playerImg_VER_CENTER = that.playerImg.position().top + that.playerImg.height() / 2;

                if ((Math.abs(that.playerImg_HOR_CENTER - that.STATIC_HOR_CENTER) <= 5 &&
                    Math.abs(that.playerImg_VER_CENTER - that.STATIC_VER_CENTER) <= that.HEIGHT_DIFFERENCE)) {

                    that.over();
                }
            }
        }

        this.checkCollisionEnemyRight = function () {
            for (var i in that.enemy) {
                that.STATIC_HOR_CENTER = that.enemy[i].position().left + that.enemy[i].width();
                that.STATIC_VER_CENTER = that.enemy[i].position().top + that.enemy[i].height() / 2;

                that.WIDTH_DIFFERENCE = that.playerImg.width() / 2 + that.enemy[i].width() / 2;
                that.HEIGHT_DIFFERENCE = that.playerImg.height() / 2 + that.enemy[i].height() / 2;

                that.playerImg_HOR_CENTER = that.playerImg.position().left;
                that.playerImg_VER_CENTER = that.playerImg.position().top + that.playerImg.height() / 2;

                if (Math.abs(that.playerImg_HOR_CENTER - that.STATIC_HOR_CENTER) <= 5 &&
                    Math.abs(that.playerImg_VER_CENTER - that.STATIC_VER_CENTER) <= that.HEIGHT_DIFFERENCE) {
                    that.over();
                }
            }
        }

        this.checkCollisionCoin = function () {
            for (var i in that.coin) {
                that.STATIC_HOR_CENTER = that.coin[i].position().left;
                that.STATIC_VER_CENTER = that.coin[i].position().top + that.coin[i].height();

                that.WIDTH_DIFFERENCE = that.playerImg.width() / 2 + that.coin[i].width() / 2;
                that.HEIGHT_DIFFERENCE = that.playerImg.height() / 2 + that.coin[i].height() / 2;

                that.playerImg_HOR_CENTER = that.playerImg.position().left + that.coin[i].width() / 4;
                that.playerImg_VER_CENTER = that.playerImg.position().top + that.playerImg.height() / 4;

                if ((Math.abs(that.playerImg_HOR_CENTER - that.STATIC_HOR_CENTER) <= 5 &&
                    Math.abs(that.playerImg_VER_CENTER - that.STATIC_VER_CENTER) <= that.HEIGHT_DIFFERENCE)) {
                    // that.jumpState = false; 
                    that.money += 1;
                    this.score.text('Coin: ' + this.money);
                    that.coin[i].remove();
                }
            }
        }

        this.checkCollisionMinimaus = function () {
            for (var i in that.minimaus) {
                that.STATIC_HOR_CENTER = that.minimaus[i].position().left;
                that.STATIC_VER_CENTER = that.minimaus[i].position().top + that.minimaus[i].height() / 2;

                that.WIDTH_DIFFERENCE = that.playerImg.width() / 2 + that.minimaus[i].width() / 2;
                that.HEIGHT_DIFFERENCE = that.playerImg.height() / 2 + that.minimaus[i].height() / 2;

                that.playerImg_HOR_CENTER = that.playerImg.position().left + that.playerImg.width();
                that.playerImg_VER_CENTER = that.playerImg.position().top + that.playerImg.height() / 2;

                if ((Math.abs(that.playerImg_HOR_CENTER - that.STATIC_HOR_CENTER) <= 5 &&
                    Math.abs(that.playerImg_VER_CENTER - that.STATIC_VER_CENTER) <= that.HEIGHT_DIFFERENCE)) {

                    that.win();
                    return true;
                }
            }
            return false;
        }

        this.move = function () {
            if ((that.count += 20) % 200 == 0) {
                that.imageCounter = that.imageCounter == 3 ? 0 : (that.imageCounter + 1);
            }
            for (var i in that.directions) {
                if (that.playerImg.position().left > 0 && i == 37 && that.moveleft) {
                    that.moveright = true;
                    that.playerImg.css("left", (that.playerImg.position().left - that.speedX) + "px");
                    that.checkCollisionLeft();
                    that.lastDirection = "left";
                    $(".gameWorld").css("left", ($(".gameWorld").position().left + that.speedX) + "px");
                    that.playerImg.css("background-position", 0 - 80 * that.imageCounter + "px 0");
                }
                if (that.playerImg.position().left < ($("#map").width() - that.playerImg.width()) && i == 39 && that.moveright) {
                    $(".gameWorld").css("left", ($(".gameWorld").position().left - that.speedX) + "px");
                    that.playerImg.css("left", (that.playerImg.position().left + that.speedX) + "px");
                    that.checkCollisionRight();
                    that.lastDirection = "right";
                    that.playerImg.css("background-position", 0 - 80 * that.imageCounter + "px 0");
                }
                if (that.playerImg.position().top > 0 && i == 38 && that.jumpState == false) {
                    that.playerImg.css("top", (that.playerImg.position().top - that.speedX) + "px");
                    that.lastDirection = "up";
                    that.moveleft = true;
                    that.moveright = true;
                    that.moveright = true;
                    that.playerImg.css("background-position", 0 - 80 * that.imageCounter + "px 0");
                    that.jumpState = true;
                    that.playerImg.css("top", that.playerImg.position().top - 6);
                }
                if (that.playerImg.position().top < ($("#map").height() - that.playerImg.height()) && i == 40) {
                    that.playerImg.css("top", (that.playerImg.position().top + that.speedX) + "px");
                    that.lastDirection = "down";
                    that.playerImg.css("background-position", 0 - 80 * that.imageCounter + "px 0");
                }
            }
            if (!that.checkCollisionMinimaus()) {
                that.checkCollision();
                that.checkCollisionCoin();
                that.checkCollisionLava();
                that.checkCollisionEnemyDead();
                that.checkCollisionEnemyLeft();
                that.checkCollisionEnemyRight();
                that.checkCollisionThorn();
                that.jump();
            }

        }
        that.jump = function () {
            if (that.jumpState) {
                if (that.speedY > -9) {
                    that.speedY -= that.gravity;
                }
                that.playerImg.css("top", that.playerImg.position().top - that.speedY);
            }
        }
    }
};