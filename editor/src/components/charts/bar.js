/*
 * @Author: zengjian 
 * @Date: 2018-12-19 19:33:59 
 * @Last Modified by: zengjian
 * @Last Modified time: 2019-02-11 16:57:29
 */
import ReactEcharts from 'echarts-for-react';
import React from 'react'



const option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
}
console.log(option,33333)



const Bar=(props)=>{
    return <div style={{width:'100%',height:'100%'}}><ReactEcharts style={{height:'100%',width:'100%'}} option={option}/></div>
}

export default Bar