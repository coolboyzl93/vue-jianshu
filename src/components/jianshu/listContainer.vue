<template>
  <div id="list-container">
    <ul class="note-list">
      <li :id="note.id" :class="{'have-img': note.haveImg}"
      v-for="note in noteList" :key="note.id">
        <a class="wrap-img" href="" target="_blank" v-if="note.haveImg">
          <img class="img-blur-don" :src="note.imgUrl" alt="120">
        </a>
        <div class="content">
          <div class="author"></div>
          <a class="title" target="_blank" href="">{{note.title}}</a>
          <p class="abstract">{{note.abstract}}</p>
          <div class="meta">
            <a class="collection-tag" target="_blank" href="">{{note.tag}}</a>
            <a class="read-number" target="_blank" href="">
              <i class="fa fa-eye"></i>
              {{note.readNumber}}
            </a>
            <a class="comment-number" target="_blank" href="">
              <i class="fa fa-comment"></i>
              {{note.commentNumber}}
            </a>
            <span>
              <i class="fa fa-heart"></i>
              {{note.likeNumber}}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'listContainer',
  data () {
    return {
      // 后端数据
      noteList: [
        {id: 'note-20489182', haveImg: true, title: '标题', imgUrl: '', abstract: 'adfadsfasdfasdfadsfsdfsdfasfasfasdfasdfadfasdfasdfasdfasdf', tag: '科学', readNumber: 17, commentNumber: 18, likeNumber: 20},
        {id: 'note-20489182', haveImg: true, title: '标题', imgUrl: '', abstract: '', tag: '绘画', readNumber: 17, commentNumber: 18, likeNumber: 20},
        {id: 'note-20489182', haveImg: true, title: '标题', imgUrl: '', abstract: '', tag: '艺术', readNumber: 17, commentNumber: 18, likeNumber: 20}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .note-list {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: left;

    li {
      position: relative;
      width: 100%;
      margin: 0 0 17px;
      padding: 0 2px 17px 0;
      border-bottom: 1px solid #f0f0f0;
      word-wrap: break-word;
    }

    .have-img {
      min-height: 140px;

      .wrap-img {
        position: absolute;
        top: 50%;
        margin-top: -68px;
        right: 0;
        width: 150px;
        height: 120px;
      }
      &>div {
        padding-right: 160px;
      }
    }

    // 内容
    .author{
      margin-bottom: 14px;
      font-size: 13px;

      .avatar {
        display: inline-block;
        vertical-align: middle;

        img {
          width: 100%;
          height: 100%;
          border: 1px solid #ddd;
          border-radius: 50%;
        }
      }

      .info {
        display: inline-block;
        vertical-align: middle;
        span {
          display: inline-block;
          padding-left: 3px;
          color: #969696;
          vertical-align: middle;
        }
      }
      a {
        color: #333;
      }
    }
    .title {
      margin: -7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
    }

    .abstract {
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
    }

    .meta {
      padding-right: 0!important;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;

      a {
        transition: .1s ease-in;
        -webkit-transition: .1s ease-in;
        -moz-transition: .1s ease-in;
        -o-transition: .1s ease-in;
        -ms-transition: .1s ease-in;
        margin-right: 10px;
        color: #b4b4b4;
      }

      span {
        margin-right: 10px;
        color: #b4b4b4;
      }
    }
    .collection-tag{
      display: inline-block;
      padding: 3px 6px;
      margin-top: -1px;
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 1;
      vertical-align: middle;
      color: #ea6f5a!important;
      border: 1px solid rgba(236,97,73,.7);
      border-radius: 3px;
    }
  }
</style>


