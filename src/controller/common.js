/**
 @Desc：layuiDemo 公共业务
 @Author：ye
 */

layui.define(function(exports){
  var $ = layui.$
  ,layer = layui.layer
  ,laytpl = layui.laytpl
  ,setter = layui.setter
  ,view = layui.view
  ,admin = layui.admin

  //公共业务的逻辑处理可以写在此处，切换任何页面都会执行
  //……

    //退出
  admin.events.logout = function(){
    //执行退出接口
    admin.req({
      url:layui.setter.dataInterface+ '/users/logout/'+layui.data(layui.setter.tableName)[layui.setter.request.tokenName]
        , headers: {
            "Authorization":  layui.data(layui.setter.tableName)[layui.setter.request.tokenName],
        }
      ,type: 'get'
      ,data: {}
      ,done: function(){ //这里要说明一下：done 是只有 response 的 status 正常才会执行。而 succese 则是只要 http 为 200 就会执行
        //清空本地记录的 token，并跳转到登入页
        admin.exit();

      }
    });
  };


  //对外暴露的接口
  exports('common', {});
});