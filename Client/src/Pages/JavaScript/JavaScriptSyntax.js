import React from 'react';

function JavaScriptSyntax(props) {
    return (
        <div className="flex main-content-div-iframe">
            <div className="flex content-div">
                <h1>變數宣告</h1>
                <h3>let 變數</h3>
                <p>變數是可以任意變動的數值。</p>
                <code>let 變數;</code>
                <h3>const 常數</h3>
                <p>const是常數，宣告時就必須初始化數值，是一經初始化後便無法改變的固定數值。</p>
                <code>const 常數 = value;</code>
            </div>
            <div className="flex content-div">
                <h1>資料型別</h1>
                <h3>未定義型別</h3>
                <p>(一個變數還沒有任何初始化的數值時的型別也是undefined)</p>
                <code>let uf = undefined;</code>
                <h3>數字型別</h3>
                <code>let number = 1;</code>
                <h3>字串型別</h3>
                <code>let string = "字串";</code>
                <h3>布林型別</h3>
                <code>let boolean = true;</code>
                <h3>空型別</h3>
                <p>(null和undefined大致上相同，但還是有不同之處，偏向找不到對象的場合都會得到undefined，而null則偏向於主動宣告null才會得到)</p>
                <code>let n = null;</code>
                <h3>陣列型別</h3>
                <p>(JS的陣列可以同時含有不同型別的資料)(以索引位置搜尋資料，ex: array[1] =&gt; 結果為"字串")</p>
                <code>let array = [1,"字串",true];</code>
                <h3>對象型別</h3>
                <p>(JS的對象以key: value的格式來處理資料)(以key名稱搜尋資料，ex: object.A =&gt; 結果為1)</p>
                <code>let object = {"{"}A: 1, B: "字串", C: true{"}"};</code>
                <h3>JSON型別</h3>
                <p>(和object一樣但是是json格式，josn格式的key是字串型別)(以key名稱搜尋資料，ex: json["C"]=&gt; 結果為true)</p>
                <code>let json = {"{"}"A": 1, "B": "字串", "C": true{"}"};</code>
            </div>
            <div className="flex content-div">
                <h1>運算子</h1>
                <p>+ 加</p>
                <p>- 減</p>
                <p>* 乘</p>
                <p>/ 除</p>
                <p>% 除後取餘數</p>
                <p>++ 加1</p>
                <p>-- 減1</p>
                <p>&gt 大於</p>
                <p>&lt 小於</p>
                <p>== 等於</p>
                <p>&gt= 大於等於</p>
                <p>&lt= 小於等於</p>
                <p>!= 不等於</p>
                <p>=== value和type都等於</p>
                <p>&& 兩個條件皆成立</p>
                <p>&& 其中一個條件成立</p>
            </div>
            <div className="flex content-div">
                <h1>函式</h1>
                <h3>函式宣告</h3>
                <code>function 函式1(){"{"} {"}"}</code>
                <h3>函式使用</h3>
                <code>函式1();</code>
                <h3>函式的參數</h3>
                <code>function 函式2(參數1, 參數2){"{"} {"}"}</code>
                <code>函式2("你好", "再見");</code>
                <h3>函式的回傳</h3>
                <code>function 函式3(){"{"} return 回傳值; {"}"}</code>
                <code>let 取得回傳值 = 函式3();</code>
                <h3>參數傳遞包含參數的函式</h3>
                <code>function 函式4(參數1,參數2){"{"} {"}"}</code>
                <code>function 函式5(函式參數){"{"} {"}"}</code>
                <code>函式5(函式4.bind(null,"你好","再見"));</code>
            </div>
            <div className="flex content-div">
                <h1>流程控制</h1>
                <h3>if判斷式</h3>
                <p>從if開始判斷，if的條件成立就執行if區塊，如不成立往下確認下一個else if的條件是否成立，以此類推，全都不成立就執行else區塊。</p>
                <code>if(條件0){"{"} {"}"}</code>
                <code>else if(條件1){"{"} {"}"}</code>
                <code>else{"{"} {"}"}</code>
                <h3>switch判斷式</h3>
                <p>switch帶入變數，case設定指定數值，執行與switch變數的數值相符的case區塊，全都不相符就執行default區塊。</p>
                <code>switch(變數){"{"}</code>
                <code>    case 0: {"{"} {"}"}; break;</code>
                <code>    case 1: {"{"} {"}"}; break;</code>
                <code>    default: {"{"} {"}"}; break;</code>
                <code>{"}"}</code>
                <h3>for迴圈</h3>
                <p>for指定初始值、條件式、處理式，在條件式未成立前會重複執行，每一次執行完後會接著執行一次處理式。</p>
                <p>(以下例子會重複執行10次)</p>
                <code>for(let i = 0;i &lt; 10;i++){"{"} {"}"}</code>
                <h3>while條件迴圈</h3>
                <p>while的條件未成立前會重複執行直到條件成立。</p>
                <p>(以下例子會無限執行)</p>
                <code>while(true){"{"} {"}"}</code>
                <h3>try...catch除錯</h3>
                <p>try區塊包含要除錯的程式碼，若有出現錯誤就執行catch區塊。</p>
                <code>try{"{"} {"}"}</code>
                <code>catch{"{"} {"}"}</code>
            </div>
            <div className="flex content-div">
                <h1>非同步</h1>
                <h3>Promise</h3>
                <p>中文意為承諾，Promise用於新增一項任務處理，Promise任務結束後分兩種結果，resolve(解決)、reject(失敗)，可以以此處理邏輯。</p>
                <code>const pr = new Promise((reject,resolve) =&gt; {"{"} {"}"});</code>
                <h3>then</h3>
                <p>then是配合Promise一起使用的，用於Promise任務結束後的接續動作，當一項Promise任務結束後會立即執行then區塊，result參數包含Promise任務的資訊。</p>
                <code>pr.then((result) =&gt; {"{"} {"}"});</code>
                <p>Promise結合then的運作機制使其非常適合用於非同步的設計模式。</p>
                <h3>async & await</h3>
                <p>async用於宣告函式是非同步的，只有非同步函式可以使用await，await用於非同步執行會回傳Promise對象的函式。</p>
                <code>function 包裝(){"{"} return pr; {"}"}</code>
                <code>async 非同步(){"{"}</code>
                <code>await 包裝();</code>
                <code>{"}"}</code>
                <code>非同步().then((result) =&gt; {"{"} {"}"});</code>
            </div>
            <div className="flex content-div">
                <h1>其它</h1>
                <h3>Array.map(foo:function)</h3>
                <p>map()用於遍歷一個陣列，對陣列的每個元素執行一次函式，參數填入要執行的函式。</p>
                <code>let a = [1,2,3];</code>
                <code>a.map(() =&gt; {"{"} {"}"});</code>
            </div>
        </div>
    );
}
export default JavaScriptSyntax;