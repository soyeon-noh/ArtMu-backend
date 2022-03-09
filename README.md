# ArtMu 
A website where you can promote commissions on Twitter or find them accurately and conveniently.


## issue
'src/interface' already exists in the index
- 캐쉬가 남아있어서 발생하는 문제
- src/interface 폴더를 삭제후 아래 커맨드 작성

```bash
git ls-files --stage src/interface
git rm --cached src/interface
```