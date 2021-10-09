<template>
    <TopTitle :title="'我的订单'"/>
    <div class="wrapbox">
        <div class="orderitem">
            <div class="orderitem__shopName">沃尔玛</div>
            <div class="orderitem__item">
                <img src="http://www.dell-lee.com/imgs/vue3/tomato.png" alt="" class="orderitem__img">
                <div class="orderitem__tags">
                    <div class="orderitem__title">番茄250g/份</div>
                    <span class="orderitem__unitprice">&yen;33.6 x 3</span>
                    <span class="orderitem__totalprice">&yen;99.9</span>
                </div>
            </div>
        </div>
    </div>
    <Docker :currenIndex = 2 />
</template>

<script>
import Docker from '../home/Docker'
import TopTitle from '../../components/TopTitle'

export default {
  name: 'Order',
  components: { Docker, TopTitle }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

.wrapbox{
    position: absolute;
    overflow-y: auto;
    left: 0;
    top: .44rem;
    right: 0;
    bottom: .49rem;
    background: #F1F1F1;
}
.orderitem{
    width: 3.39rem;
    margin: .16rem auto;
    background: #FFF;
    padding: .16rem;
    box-sizing: border-box;
    &__shopName{
        height: .22rem;
        line-height: .22rem;
        font-size: .16rem;
        font-weight: bold;
        color: #333333;
    }
    &__item{
        display: flex;
        margin-top: .16rem;
    }
    &__img{
        width: .46rem;
        height: .46rem;
        margin-right: .16rem;
    }
    &__tags{
        flex:1;
        position: relative;
    }
    &__title{
        @include ellipsis;
        height: .20rem;
        width: 1.5rem;
        line-height: .20rem;
        margin-bottom: .06rem;
        font-size: .14rem;
        color: #333;
    }
    &__unitprice{
        display: inline-block;
        height: .20rem;
        line-height: .20rem;
        font-size: 14px;
        color: #E93B3B;
    }
    &__totalprice{
        position: absolute;
        right: 0;
        display: inline-block;
        height: .20rem;
        line-height: .20rem;
        font-size: 14px;
        color: #000;
    }
}
</style>
