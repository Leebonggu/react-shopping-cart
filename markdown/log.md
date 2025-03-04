# Log

## 1차 작업

- 작업에 기본적으로 필요한 라이브러리 설치
- MockAPI 생성
- 기본타입 생성
- 기본 페이지 생성

### Next

- 이전까지는 큰 생각이 필요없어도 할 수 있는 작업들
  - API 만들때는 고민이 살짝 필요하긴했지만, MockAPI의 목적은 서버로부터 받아올 데이터를 가정하고, 빠르게 목데이터를 넘기는게 아닐까
  - 그다지 설계가 필요없어도 될거라고 생각함
  - 차라리 하드코딩해서 빠르게 만들어가는게 더 도움이 될수도
- 어떻게 페이지를 만들어갈지 생가각하고 넘어가기
  - 상태를 어떻게 관리할까...
  - 이전 미션에서 컨텍스트 API를 사용해봤으니, 이번에도 한번 사용해봐야겠다.
- MSW 초기 렌더링에 문제가 있음
  - `Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON`
    - 초기 설정의 문제 -> 코드 수정으로 해결
    ```
    if (getEnvMode() === 'production' || getEnvMode() === 'development') {
        worker.start();
      }
    ```
  - fetch를 써서 그런가? -> axios써보자

## 2차 작업

- 위의 MSW초기 실행 문제 해결
- 홈 화면 구성
- 약간의 반응형
- useFetch

### Next(03.26 updated)

- 마크업 완료
- 상태관리 라이브러리 고민 (1순위) -> Redux vs Recoil
- 리뷰반영
  - price comma
  - 네트워크에서 응답이 길어질 때 UI상에서 어색하지 않은지 의도적으로 체크해보면 어떨까요? delay 함수를 구현해서 실제 서버 응답인 것 처럼 handler에서 100ms 정도 지연을 두게 설정해두고 네트워크에서 응답이 길어질 때 케이스는 delay의 인자(ms)를 늘려서 각 케이스에 대해 테스트해서 어색한 부분이 있다면 고쳐보면 좋을 것 같아요.
  - 추가로 더 고민해볼만한 문제가 있다면 API cache와 suspense를 통한 로딩상태 관리가 있는데 여유가 되신다면 고민해보고 적용해보시면 좋을 것 같아요.
- 요구사항 반영 시작
