list = ['<<<  Page1  >>>', '[커피] 비터홀릭(원두)', '[커피](1) 더치파우치', '(2)디카페인 파우치', '리드 검정뚜껑(1000매/28)', '컴포즈종이컵20oz', 'PT투명돔뚜껑', 'PT투명컵/무지20oz', '홀더/컴포즈', '스트로우', '버블스트로우', '커피스틱', '비닐캐리어1구', '비닐캐리어2구', '[파우더] 자바칩컴포즈', '[파우더] 쿠키앤크림 파우더', '[파우더] 요거트파우더', '[파우더] 그린민트초코파우더', '[파우더] 그린티파우더(녹차)', '[파우더] 밀크티파우더', '[파우더] 바리스타카카오파우더', '[파우더] 곡물파우더', '[파우더] 복숭아파우더', '[파우더] 딸기가루', '[파우더] 밀크쉐이크', '상하목장 소프트믹스(냉장)', '고구마페이스트', '더블초코파우더', '캔디소다파우더', '[샌드위치] 옥수수', '[샌드위치] 햄치즈', '[샌드위치] 라즈베리', '[샌드위치] 카야', '<<<  Page2  >>>', '바나나 파우더', '달고나 토핑', '오자몽,청', '오레몬,청', '유자청', '[스무디] 딸기, 1.8kg', '[스무디] 망고, 1.8kg', '[스무디] 베리믹스, 1.8kg', '[원액] 딸기', '[원액] 망고', '[원액] 블루베리', '[원액] 참외', '청포도원액', '패션후르츠', '타트체리', '레몬 농축액 1.2kg', '자몽 농축액 1.2kg', '[소스] JM브랜드/초코', '[소스] JM브랜드/카라멜', '[소스] 흑당소스', '[소스] 연유', '[시럽] JM브랜드/바닐라시럽', '[시럽] JM브랜드/헤이즐넛시럽', '[시럽] 블루큐라소시럽', '잉글리시블랙퍼스트', '허니자몽베이스', '(1)크로플생지', '(2)메이플시럽', '[롤케익] 딸기', '[롤케익] 모카', '[롤케익] 플레인', '<<<Page3>>>', '[와플재료] 와플믹스', '[와플재료] (1)베이킹파우더', '(2)통깨', '[설탕] 봉지설탕 3kg', '[설탕] 스틱설탕 5g (100개/팩)', '[차tea] 홍차다즐링', '[차tea] 홍차 얼그레이', '[예빠니] 캐모마일', '[예빠니] 페퍼민트', '[예빠니] 로즈마리', '[부재료] 청크초콜릿', '[부재료] 오레오쿠키크럼태', '[부재료] 로투스분태', '(1)아몬드토핑', '(2)사과잼', '(1)크림치즈', '(2)마스카포네치즈', '뽀로로 딸기', '뽀로로 사과', '뽀로로 밀크', '사이다', '[우유] 컴포즈우유 1000ml', '생초콜릿(냉장)/팥', '[원액] OTO레몬주스, 946ml', '[기타] 컴포즈 네프킨', '쓰레기 종량제', '재활용 봉투', '(생과일) 자몽', '(생과일) 레몬', '와플손잡이봉투', '와플양포지', '포스용지', '콘소메파우더', '옥수수베이스', '옥수수(냉동)', '<<<Page4>>>', '[냉동] 에버휩 휘핑크림', '[냉동] 타피오카펄', '[냉동] 딸기', '[냉동] 망고', '[냉동] 블루베리', '인절미', '케이크 티라미스', '케이크 뉴욕치즈', '케이크 블랙벨벳', '케이크 레드벨벳', '케이크 바나나', '생크림카스테라(화이트)', '허니버터브레드(스위트번)', '크로크뮤슈', '마카롱 산딸기', '마카롱 초코', '마카롱 바닐라', '마카롱 라멜', '마카롱 모카', '마카롱 블루베리', '냉동) 갈아만든 샤인머스켓케일(팩)', '냉동) 갈아만든 오렌지당근(팩)', '냉동) 갈아만든 키위(팩)', '냉동) 갈아만든 복숭아(팩)', '(1)쿠키 초코칩', '(2)쿠키마카다미아', '(1)로투스 쿠키', '(2)오레오 화이트 쿠키', '(1)카라멜팝콘', '(2)고구마팝콘']

const rowCnt = list.length;
const columnCnt = 2;

for (let i = 0; i < rowCnt; i++) {
  document.write('<tr>');
  for (let j = 0; j < columnCnt; j++)  {
    document.write('<td>');
    if (j==0){
        document.write(list[i])
    }
    if (j==1){
        document.write('<input type="number" name="text" size="20" style="width:95%; height:100%; border:0; background-color:#F5DDC8;">')
    }
    // document.write(i + ", " + j);
    document.write('</td>');
  }
  document.write('</tr>')
}
