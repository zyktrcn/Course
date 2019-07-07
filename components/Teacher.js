import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';

import TeacherItem from './TeacherItem'

export default class Teacher extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      teachers: [
        {
          name: '刘莹',
          pic: require('../images/ly.png'),
          introduction: '刘莹老师毕业于山东师范大学教育学院，教育学士、国家三级心理咨询师。身为教师，教学为本。积极探索创新教育教学新模式，认真备课、认真上课，主动钻研业务，用爱与学生沟通。自工作以来获得教科研先进个人，主持山东省基础教育课题《以任务单为载体的小学语文课前预习有效性的研究》，校级课题《小学高年级整体阅读教学下的单元整合研究》，参与省级课题《翻转课堂下的小学书法研究》等。'
        },
        {
          name: '郭新',
          pic: require('../images/gx.png'),
          introduction: '郭新老师毕业于中央广播电视大学“汉语言文学”专业。“以自己的努力，为学生播下幸福的种子，使我的每个学生都能获得益处，以至于对他的一生产生积极的影响。”是她的教育理想。工作中，她喜欢用“放大镜”的眼光发现每一个孩子的优点，把每一个孩子的点滴进步与成长视为自己最大的财富。'
        },
        {
          name: '徐小婷',
          pic: require('../images/xxt.png'),
          introduction: '徐小婷， 2015年毕业于首都师范大学，硕士。2015年进入清华大学附属小商务中心区实验小学任教，目前担任三年级数学学科教学。 一个好教师就是一种好教育。教师应努力追求高尚的师德修养、精深的专业水平、突出的研究能力、丰硕的研究成果、显著的示范作用。'
        },
        {
          name: '张静',
          pic: require('../images/zj.png'),
          introduction: '张静， 2011年毕业于北京师范大学 汉语言文学专业 本科/2014年毕业于北京语言大学 英语专业 本科，文学学士。  2015年全国实用英语超级联赛北京赛区决赛辅导特等奖； 2016年承担全国教育信息技术十二五规划重点课题项目组成员；2017年获全国少儿英语大赛辅导一等。'
        },
        {
          name: '韩雪',
          pic: require('../images/hx.png'),
          introduction: '韩雪， 2017年毕业于东北师范大学，硕士。2017年进入清华大学附属小学任教，目前担任英语老师兼副班主任。'
        }
      ]
    }
  }
  static navigationOptions = {
    tarBarLabel: '导师介绍',
    headerTitle: '导师介绍'
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {
            this.state.teachers.map((item) => {
              return (<TeacherItem item={item} />)
            })
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10
  },
  item: {
    height: 'auto'
  }
});
