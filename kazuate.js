// 答え
let kotae = Math.floor(Math.random() * 20) + 1;
console.log('答え（デバッグ用）: ' + kotae);
let result;

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('button#print');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    kaisu = kaisu + 1;
    let y = document.querySelector('input[name="kazu"]');
    let yoso = y.value;
    let n = Number(yoso);
    if (kaisu >= 4) {
        result = "答えは" +kotae + "でした。すでにゲームは終わっています";
    } else {
        if (n === kotae) {
            result = "正解です。おめでとう";
        }
        else if (n > kotae) {
            result = "残念、答えはもっと小さいです";
        }
        else {
            result = "残念、答えはもっと大きいです";
        }
    }

    // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
    let s1 = document.querySelector('span#kaisu');
    s1.textContent = kaisu;
    let s2 = document.querySelector('span#answer');
    s2.textContent = n;
    let s3 = document.querySelector('p#result');
    s3.textContent = result;
}
// 課題3-1: 正解判定する
// kotae と yoso が一致するかどうか調べて結果を出力
// 課題3-1における出力先はコンソール

