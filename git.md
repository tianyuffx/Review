git init
git add .
git remote add origin XXXX
git push origin master

git status
git commit -m "first commit"
git commit --amend

git stash save 'my stash'
git stash list
git stash apply stash@123
git stash pop

git branch
git branch -r
git branch dev
git branch vv
git branch -d dev
git branch oldName newName

git checkout dev
git checkout -b test

git merge dev

git reset --soft HEAD^1

git log

<!-- git log stats -- -->

<!-- vim 操作 mac操作 -->