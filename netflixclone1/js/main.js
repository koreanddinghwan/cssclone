//탭을 클릭하면 해당 html이 보이도록하자.
//getElementsByTagName으로 사용시 리턴되는 형태는 html collection이다. foreach와같은 함수 사용불가.
//그러나 쿼리셀렉터는 foreach()로 for문돌리는 것이 가능하며, array.from()으로 배열로 전환이 가능하다. 
const tabItems = document.querySelectorAll(".tab-item");

//tab-content-item 가져오기
const tabContentItems = document.querySelectorAll(".tab-content-item");



//select tab content item
function selectItem(event) {
    //누르면 선택되어있는 탭은 선 지우기
    //이걸 반영하기 위해서, tab-Items의 모든 tab-border클래스를 지워버리고 밑에서 클릭된 탭만 'class-border'를 추가한다.
    removeBorder();
    //show도 동일하게 적용한다. 
    removeshow();

    // 현재 탭에 아래 테두리 추가하기
    //this를 사용하는 경우와 event.target을 사용하는 경우 결과가 달라진다.
    //this는 이벤트리스너가 달린 dom객체에만 명령을 수행하는 반면,
    //event.target은 이벤트리스너가 달린 dom객체의 하위요소에서  이벤트가 발생하면 거기에 명령을 수행할 수 있다ㅏ.
    this.classList.add('tab-border');
    


    //Dom으로 현재 클릭된 탭을 가져온다.
    //console.log(this)를 확인해보면 this는 현재 클릭된 탭 즉, .tabs의 #tab-1, #tab-2, #tab-3 중 하나를 객체로 가져온다.
    //이 객체의 id프로퍼티에 접근하기위해 this.id로 접근해 ${}로 가공해 쿼리셀렉터로 해당하는 tab content의 객체를 가져온다.
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    //가져온 tabcontent 객체에 show클래스를 넣는다. 
    tabContentItem.classList.add('show')

}

function removeBorder() {
    //tab-items들에 대해 tab-border 클래스를 모두 지운다.
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeshow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

//tab이 클릭되었는지 인식하기
tabItems.forEach(item => item.addEventListener('click', selectItem))



