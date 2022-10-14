# git add
- 수정된 이력들을 commit할 준비를 하는 단계
- 특정 파일의 수정 이력만 추가하고 싶을 경우에는 `git add [파일명]`
- 모든 파일의 수정 이력을 추가하고 싶을 경우에는 `git add .`

# git commit
- 수정된 이력들을 기록
- commit 메세지를 한줄로 바로 작성할 경우 `git commit -m "메세지"`
- commit 메세지를 여러줄로 작성하고 싶을 경우 `git commit`

# git push
- 작성한 코드를 원격 저장소에 업로드
- `git push origin [branch이름]`

# git remote
- 원격 저장소를 로컬과 연결
- `git remote origin [repository주소]`

# git branch
- 작업할 branch를 생성
- `git branch [branch이름]`

# git checkout 
- 작업할 branch로 이동
- `git checkout [branch이름]`
- `git checkout -b [branch이름]`으로 생성과 동시에 이동도 가능.