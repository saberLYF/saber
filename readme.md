# git是什么
集中式版本控制系统（vcs）=> svn
分布式版本控制系统（dvcs）=> git

# git的作用
在项目开发的进程中 对值得记录的时间节点进行一个"备份" 方便后期恢复
方便团队协作开发

# git管理文件的三种状态

Git有三种状态，你的文件可能处于其中之一：
- 已修改（modifued）：表示修改(增、删、改)了文件但还没有保存到数据库中 文件名用红色表示
- 已暂存 (staged) : 表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中
- 已提交 （committed）: 表示数据已安全保存在本地数据库中

这会让我们



# 配置用户名及邮箱

git config --global user.name "..."
git config --global user.email "..."


# 查看配置信息
git config --list
git config user.name
git config user.email

# 获取git仓库（repo）
$ cd /c/user/my_project

- 自行初始化git仓库
git init 

- 克隆远程git仓库 (服务器端)
git clone repo_url(仓库url地址)

U （Untracked） 未跟踪（新增）
A (added) 已跟踪
M （modified） 跟踪后被修改 完成