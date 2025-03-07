# 자료구조와 알고리즘 3주차 과제

- 정렬 알고리즘을 보고 그림을 그리며 이해합니다.
- 정렬 알고리즘 코드를 분석하고 그림을 그리며 이해합니다.
- 정렬 알고리즘을 코드로 실제로 구현해 봅니다.

1. 버블 정렬
2. 선택 정렬
3. 삽입 정렬
4. 셀 정렬
5. 머지 정렬
6. 퀵 정렬
7. 힙 정렬

## 패키지 설치

```bash
$ npm ci
```

## 제한조건

- 모든 테스트를 통과해야 합니다.
- ESLint를 통과해야 합니다.
- 스스로 문제 해결법을 떠올리기 위해 Copilot은 사용하지 말아주세요.

## 테스트 실행 방법

```bash
# 의존성 설치
$ npm ci
# 테스트 실행
$ npm test
# 테스트 실행 (watch 모드)
$ npm run watch
# 특정 문제만 테스트 실행
$ npm run watch -- problem-1
```

---

안녕하세요. 3주차 과제에 대해서 추가 설명드립니다

먼저 알고리즘을 보고 그림을 그려보는 것은, 알고리즘을 이해하는 과정입니다. <br/>
이 그림을 그릴 수 있으면, 해당 정렬 알고리즘이 어떻게 동작하는지 설명할 수 있게 됩니다.<br/>
<br/>

코드를 분석하여 그림을 그리는 것은 컴퓨터가 알고리즘을 어떻게 실행하는지 이해하는 과정입니다.<br/>
코드를 보고 그림을 그릴 수 있으면 프로그램이 어떻게 알고리즘을 수행할 수 있는지 알게됩니다. <br/>
<br/>
알고리즘을 그냥 이해하는 것과 컴퓨터가 수행하는 방법까지 이해하는 것은 다릅니다. <br/>
코드를 한 줄 한 줄 내가 직접 실행한다고 생각하며 코드를 읽어보고 실제로 정렬이 어떻게 되는지 분석해 보세요.
<br/>
<br/>
알고리즘을 직접 구현하는 것은 또 다른 이야깁니다. 우리는 코드를 구현할 수 있어야 제대로 아는 것입니다. <br/>근데 좀 어려울 수 있기 때문에 원본 코드를 드렸고 코드를 분석하는 과정을 추가했습니다.<br/>
<br/>
코드를 구현할 때는 완성된 코드를 보지 않고 직접 구현해 보세요. <br/>
그러다가 어려우면 살짝 살짝 참고하셔도 됩니다. 다만 코드를 보고 절대 따라치지 마세요.<br/> 하나도 도움이 안됩니다.
