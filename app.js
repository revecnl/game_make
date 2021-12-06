// 캔버스 만들때 필요한 거
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// 오브젝트 생성1 - 나루니
var dino = {
    x : 50,
    y : 400,
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
        this.y = 400;
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
var jumpingtimer = 0;
var animation;


function EachFrame(){
    animation = requestAnimationFrame(EachFrame);//프레임마다 실행하게 함//
    timer++;

    // 캔버스 리셋
    ctx.clearRect(0,0, canvas.width, canvas.height);


    // 장애물
    // 타이머, 프레임 설정
    if(timer % 120 === 0){
        var cactus = new Cactus();
        enemy.push(cactus)
    }



    enemy.forEach((a, i, o)=>{
    //x좌표가 0미만이면 제거
    if (a.x < 0){
        o.splice(i, 1)
    }
    a.x--;
    //좌표계산 충돌
    crash(dino, a);

    a.draw();
    })

    //스페이스 누르면 점프

if (jumping == true){
    dino.y-=10;
    jumpingtimer++;
}

if(jumping == false){
    if(dino.y < 400){
    dino.y+=10;}
}

if (jumpingtimer > 30){
    jumping = false;
    jumpingtimer = 0;
}
// 나루니
    dino.draw()
}

EachFrame();

//충돌확인
function crash(dino, cactus){
    var Xaxisdifference = cactus.x - (dino.x + dino.width);
    var Yaxisdifference = cactus.y - (dino.y + dino.height);
    if(Xaxisdifference < 0 && Yaxisdifference < 0){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        cancelAnimationFrame(animation)
    }
}



//스위치
var jumping = false;

document.addEventListener('keydown', function(e){
    if (e.code === 'Space'){
        jumping = true;
    }
})

//이미지 덧씌우기
var img1 = new Image();
imag1.src = '';