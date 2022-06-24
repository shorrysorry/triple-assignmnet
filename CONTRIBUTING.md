# 브렌치 룰

### main

- 초기 init commit을 제외하고, 직접 푸시 금지. 무조건 PR.
- 최종 릴리즈 코드를 같이 푸시

### develop

- 릴리즈 이전의 최종적으로 피쳐 브랜치의 합이 되는 브랜치
- 직접 푸시 하는 것은 지양하되 불가피할 경우 바로 푸시

### feature/`#<issue number>`

- 피쳐 개발

## Reference

- https://nvie.com/posts/a-successful-git-branching-model/
- https://guides.github.com/introduction/flow/

# 커밋 컨벤션

## Type

- `feat` 새로운 기능 추가
- `fix` 버그 수정
- `docs` 문서 수정
- `style` 코드 포맷팅, 띄어쓰기, 들여쓰기 , 세미콜론 누락 등
- `chore` (코드 수정 없이) 빌드 스크립트 설정 변경, 패키지 매니저 수정
- `refactor` 코드 리팩토링
- `merge` merge 시 사용

## Subject

- '동작(commit type) #이슈번호 - 내용' 형식으로 작성한다.
- 커밋로그의 첫 글자는 대문자로 시작한다.
  <br/>
  <br/>
  ex) Feat #12 - 모달 기능 추가

## Reference

- https://www.conventionalcommits.org/en/v1.0.0/
- https://doublesprogramming.tistory.com/256
