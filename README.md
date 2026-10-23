# My Media — 모바일 우선 갤러리

## 내 사진 넣는 방법
1. `photos` 폴더에 사진 파일을 복사합니다.
2. 예시 사진 이름을 아래처럼 맞춥니다: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`.
3. `index.html`을 브라우저에서 열면 사진이 사이트 안에서 불러와집니다. 사진은 인터넷에 업로드할 필요가 없습니다.
4. 사진 파일이 PNG라면 `script.js`의 경로도 예를 들어 `photos/photo1.png`처럼 바꿔 주세요. 파일 이름과 확장자가 정확히 일치해야 합니다.

## 파일 구성
- `index.html`: 페이지 구조
- `style.css`: 모바일 화면 중심의 스타일
- `script.js`: 콘텐츠 목록과 탭/검색/상세 보기
- `photos/`: 직접 넣은 사진 파일을 보관하는 폴더

## 콘텐츠 수정
`script.js`의 `items` 배열을 편집합니다.
- 사진: `{type:"photo", title:"사진 제목", image:"photos/photo1.jpg", url:"", alt:"사진 설명"}`
- 영상: `{type:"video", title:"영상 제목", image:"썸네일 주소", duration:"05:20", url:"유튜브 주소", alt:"썸네일 설명"}`

참고: 로컬 사진은 사이트 파일과 함께 보관해야 합니다. HTML 파일만 따로 옮기면 사진 경로가 깨질 수 있습니다.
