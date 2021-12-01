// 캔버스 만들때 필요한 거
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// 오브젝트 생성1 - 나루니
var dino = {
    x : 50,
    y : 200,
    width : 50,
    height : 50,

    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        //하드코딩 추후에 각 위치에 맞는 값 입력//
    }
}
// 애니매이션 만들기 / 어지간하면 라이브러리 쓰자


// 오브젝트 생성2 - 피나타
class Cactus{
    constructor(){
        this.x = 400;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
draw(){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// 타이머
var timer = 0;
var enemy = [];

function EachFrame(){
    requestAnimationFrame(EachFrame);
    timer++;

    // 캔버스 리셋
    ctx.clearRect(0,0, canvas.width, canvas.height);


    // 장애물
    // 타이머, 프레임 설정
    if(timer % 120 === 0){
        var cactus = new Cactus();
        enemy.push(cactus)
    }

    enemy.forEach((a)=>{
    a.x--;
    a.draw();
    })

    // 나루니
    dino.draw()
}

EachFrame();