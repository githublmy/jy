<template>
  <div class="joinus clearfix">
    <!-- 地图 -->
    <div class="amap">
      <div>
        <div class="infos">招聘信息</div>
        <div class="search clearfix">
          <!-- 输入框enter -->
          <el-input
            @keyup.enter.native="search"
            v-model="searchData"
            placeholder="输入职位名称"
          ></el-input>
          <el-button type="primary" @click="search">搜索</el-button>
        </div>
      </div>
      <!-- 使用地图组件 -->
      <VueMap></VueMap>
      <div class="address clearfix">
        <p>
          <span class="text">地</span><span>址：浙江省绍兴市上虞区曹娥街道惠普广场</span>
        </p>
        <p>联系人：诸经理</p>
        <p><span class="text">手</span>机：15258500305</p>
        <p><span class="text">邮</span>箱：jieyougame@163.com</p>
      </div>
    </div>

    <!-- 表格搜索 -->
    <el-table
      :data="list"
      row-key="id"
      lazy
      :expand-row-keys="expands"
      @row-click="rowclick"
      highlight-current-row
      :header-cell-style="{ background: '#375EA7' }"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline>
            <el-form-item label="学历：" class="a">
              <span>{{ props.row.education }}</span>
            </el-form-item>
          </el-form>
          <el-form label-position="left" inline class="a">
            <el-form-item label="工作年限：">
              <span>{{ props.row.workingYears }}</span>
            </el-form-item>
          </el-form>
          <el-form label-position="left" inline class="a">
            <el-form-item label="薪资：">
              <span>{{ props.row.salary }}</span>
            </el-form-item>
          </el-form>
          <el-form label-position="left" inline>
            <el-form-item label="岗位详情：">
              <p
                v-html="props.row.details"
                style="
                  font-size: 14px;
                  line-height: 20px;
                  font-weight: 100;
                  color: #7d7d7d;
                "
              ></p>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column label="职位名称" prop="name"></el-table-column>
      <el-table-column label="职位类别" prop="classify"></el-table-column>
      <el-table-column label="工作地点" prop="address"></el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="page clearfix">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-size="limit"
        :pager-count="num"
        layout="total, prev, pager, next, jumper"
        :total="total"
        hide-on-single-page
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
var listJson = {
  list: [
    {
      id: 1,
      name: "游戏开发",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 2,
      name: "游戏策划",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 3,
      name: "高级程序员",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 4,
      name: "u3d工程师",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 5,
      name: "产品运营",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 6,
      name: "广告设计",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 7,
      name: "行政实习生",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 8,
      name: "UI设计",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 9,
      name: "销售",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },

    {
      id: 10,
      name: "大数据架构师",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 11,
      name: "大数据架构师",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 12,
      name: "大数据架构师",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 13,
      name: "大数据架构师",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 14,
      name: "大数据架构师",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 15,
      name: "大数据架构师",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 16,
      name: "大数据架构师",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 17,
      name: "大数据架构师",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 18,
      name: "大数据架构师",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 19,
      name: "大数据架构师",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 20,
      name: "大数据架构师",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
    {
      id: 21,
      name: "大数据架构师",
      classify: "游戏",
      address: "绍兴",
      education: "本科",
      workingYears: "1~3年",
      salary: "8~10k/月",
      details: `岗位职责：<br>
      1、构建并完善游戏运营数据分析体系，负责日常游戏业务相关的数据整理、统计、分析，产出报告；<br>
2、针对游戏进行专项数据分析，包括但不限于游戏现状、用户流失、用户画像、用户分层等内容，为运营决策、游戏优化、广告投放及市场策略提供数据支撑；<br>
3、针对日常数据进行风险监控，及时发现数据异常，定位原因并跟进解决；<br>
4、基于市场数据，进行市场分析及用户研究，产出相关报告；<br>
任职要求：<br>
1、计算机、统计学、数学相关专业，有实际数据分析经验、游戏行业经验者优先；<br>
2、熟练使用excel办公软件，熟练使用mysql/hive代码，掌握SPSS、R、SAS等其中一种分析工具；<br>
3、数理逻辑清晰，数据敏感度高，对于数据指标有清晰的理解，能够独立完成游戏业务数据分析工作；<br>
4、热爱游戏，工作细致耐心、积极主动，有责任心，善于沟通、合作，有出色的理解能力和执行能力；<br>
5、抗压能力强，能接受较高强度的工作；`,
    },
  ],
};
import VueMap from "../components/VueMap";
export default {
  components: {
    VueMap,
  },
  data() {
    return {
      num: 5,
      list: [],
      data: [],
      limit: 10,
      total: null,
      page: 1,
      searchData: "",
      expands: [],
    };
  },
  computed: {
    name() {
      let res = this.data.find(item.name);
      return res.name;
    },
  },
  created() {
    this.pageList();
  },
  methods: {
    // 展开行
    rowclick(row) {
      Array.prototype.remove = function (val) {
        let index = this.indexOf(val);
        if (index > -1) {
          this.splice(index, 1);
        }
      };
      if (this.expands.indexOf(row.id) < 0) {
        this.expands.push(row.id);
      } else {
        this.expands.remove(row.id);
      }
    },
    pageList() {
      // 发请求拿到数据并暂存全部数据,方便之后操作
      this.data = listJson.list;
      this.getList();
    },
    // 处理数据
    getList() {
      // es6过滤得到满足搜索条件的展示数据list
      let list = this.data.filter((item) => item.name.includes(this.searchData));
      this.list = list.filter(
        (item, index) =>
          index < this.page * this.limit && index >= this.limit * (this.page - 1)
      );
      this.total = list.length;
    },
    // 当每页数量改变
    handleSizeChange(val) {
      this.limit = val;
      this.getList();
    },
    // 当前页改变
    handleCurrentChange(val) {
      this.page = val;
      this.getList();
    },
    // 搜索过滤数据
    search() {
      this.page = 1;
      this.getList();
    },
  },
};
</script>
<style scoped>
.joinus {
  margin: 0 auto;
  padding-top: 20px;
  min-width: 1002px;
  width: 1002px;
}
/* 地图 */
.amap {
  height: 700px;
  width: 300px;
  float: left;
}
.clearfix::after,
.clearfix::before {
  content: "";
  display: table;
  clear: both;
}
/* 搜索框 */
.amap .el-input {
  width: 230px;
  float: left;
}
.amap .infos {
  font-size: 16px;
  height: 60px;
  color: #fff;
  font-weight: bold;
  line-height: 60px;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: #375ea7;
}

.amap .search {
  margin-bottom: 150px;
}
/* 地址 */
.address p {
  margin-top: 10px;
  font-size: 12px;
  margin-left: 0;
  color: #000;
}
.address p .text {
  letter-spacing: 1em;
}
</style>
<style>
.search .el-input__inner {
  border: 1px solid #adb8d2 !important;
  border-right: transparent !important;
  border-radius: 4px 0 0 4px !important;
}
.search .el-button {
  border-radius: 0 4px 4px 0 !important;
}
.el-form-item__label {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}
.el-form-item__content {
  font-size: 20px;
  font-weight: 700;
}
.el-table td,
.el-table th {
  padding: 18px 0;
}
.el-table__expanded-cell .a {
  float: left;
  margin-right: 120px;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #cbceec;
}
.el-table {
  border-radius: 4px;
  width: 700px;
  margin: auto;
}
tr.el-table__row {
  cursor: pointer;
}
.page {
  width: 700px;
  float: right;
}
.el-pagination {
  float: right;
}

.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
.el-table thead {
  color: #fff;
  background-color: #375ea7;
}

.el-table__body tr.current-row > td {
  background-color: #e1e7f0 !important;
}
.el-table--border::after,
.el-table--group::after,
.el-table::before {
  background-color: #cbceec;
}
</style>
