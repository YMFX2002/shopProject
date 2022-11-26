<template>
    <div>
        <div class="footer">
            <img class="imgFooter" src="./images/footeruse.jpg" alt="">
            <div class="footer-container">
                <div class="footerList">
                    <div class="footerItem">
                        <h4>购物指南</h4>
                        <ul class="footerItemCon">
                            <li>购物流程</li>
                            <li>会员介绍</li>
                            <li>生活旅行</li>
                            <li>常见问题</li>
                            <li>大家电</li>
                            <li>购物指南</li>
                            <li>联系客服</li>
                        </ul>

                    </div>
                    <div class="footerItem">
                        <h4>配送方式</h4>
                        <ul class="footerItemCon">
                            <li>上门自提</li>
                            <li>211限时达</li>
                            <li>配送服务查询</li>
                            <li>配送费收取标准</li>
                            <li>海外配送</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>支付方式</h4>
                        <ul class="footerItemCon">
                            <li>货到付款</li>
                            <li>在线支付</li>
                            <li>分期付款</li>
                            <li>邮局汇款</li>
                            <li>公司转账</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>售后服务</h4>
                        <ul class="footerItemCon">
                            <li>售后政策</li>
                            <li>价格保护</li>
                            <li>退款说明</li>
                            <li>返修/退换货</li>
                            <li>取消订单</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>特色服务</h4>
                        <ul class="footerItemCon">
                            <li>夺宝岛</li>
                            <li>DIY装机</li>
                            <li>延保服务</li>
                            <li>京东E卡</li>
                            <li>京东通信</li>
            
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>帮助中心</h4>
                        <p>京东已向全国2661个</p>
                        <p>区县提供自营配送服</p>
                        <p>务，支持货到付款、</p>
                        <p>POS机刷卡和售后上</p>
                        <p>门服务</p>
                    </div>
                </div>
                <div class="copyright">
                  
                    <ul class="helpLink">
                        <li>关于我们
                            <span class="space"></span>
                        </li>
                        <li>联系我们
                            <span class="space"></span>
                        </li>
                        <li>联系客服
                            <span class="space"></span>
                        </li>
                        <li>商家入驻
                            <span class="space"></span>
                        </li>
                        <li>合作招商
                            <span class="space"></span>
                        </li>
                        <li>商家帮助
                            <span class="space"></span>
                        </li>
                        <li>手机京东
                            <span class="space"></span>
                        </li>
                        <li>销售联盟
                            <span class="space"></span>
                        </li>
                        <li>风险监测
                            <span class="space"></span>
                        </li>
                        <li>隐私政策
                            <span class="space"></span>
                        </li>
                        <li>京东社区
                            <span class="space"></span>
                        </li>
                        <li>友情链接
                            <span class="space"></span>
                        </li>
                        
                    </ul>
                    <p>京公网安备 110000020000088号 | 京ICP备11041704号 | ICP | 互联网药品信息服务资格证编号(京)-经营性-2014-0008 | 新出发京零</p>
                    <p>互联网出版许可证编号新出网证(京)字150号 | 出版物经营许可证 | 网络文化经营许可证京网文[2020]6112-1201号 | 违法和不良信息举报电话：4006561155</p>
                    <p>京东旗下网站：京东钱包 | 京东云 | 网络内容从业人员违法违规行为举报电话：4006561155-3</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
 .footer {
        background-color: #eaeaea;

        .imgFooter{
            
            width: 100%;
        }
        .footer-container {
            width: 1200px;
            margin: 0 auto;
            padding: 0 15px;

            .footerList {
                padding: 20px;
                border-bottom: 1px solid #e4e1e1;
                border-top: 1px solid #e4e1e1;
                overflow: hidden;
                padding-left: 40px;

                .footerItem {
                    width: 16.6666667%;
                    float: left;

                    h4 {
                        font-size: 14px;
                    }

                    .footerItemCon {
                        li {
                            line-height: 18px;
                        }
                    }

                    &:last-child img {
                        width: 121px;
                    }
                }
            }

            .copyright {
                padding: 20px;

                .helpLink {
                    text-align: center;

                    li {
                        display: inline;

                        .space {
                            border-left: 1px solid #666;
                            width: 1px;
                            height: 13px;
                            background: #666;
                            margin: 8px 10px;
                        }
                    }
                }

                p {
                    margin: 10px 0;
                    text-align: center;
                }
            }
        }
    }

</style>