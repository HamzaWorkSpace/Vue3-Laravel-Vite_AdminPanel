<template>


  <b-container class="barchart">
    <b-row>
      <b-col>  
              <BarChart :height="500" class="SalesChart"
                v-bind="barChartProps"
              />
      </b-col>
    </b-row>
  </b-container>
</template>
      
      <script setup>
      import {computed, ref} from "vue";
      import { BarChart, useBarChart } from "vue-chart-3";
      import { Chart, registerables } from "chart.js";
      import ChartDataLabels from 'chartjs-plugin-datalabels';
      import { SalesReport } from '../store/salesStore.js'
      
      const sales = SalesReport();
      
      sales.fetchSalesReport();
      
        
        Chart.register(ChartDataLabels);//after importing datalabels from chart.js registering datalabels
        Chart.register(...registerables); //after importing registering chart.js
      
        Chart.defaults.datasets.bar.barThickness = 42; //seting bar thickness of barchart
        Chart.defaults.font.size = 15;
        Chart.defaults.font.weight = 'bold';
        sales.graphDataLabels = ref(sales.graphDataLabels);
      
        sales.graphDataValues = ref(sales.graphDataValues);
        
        const SalesBoardData = computed(() => ({
            
            labels:  sales.graphDataLabels,
            datasets: [{
              
              data: sales.graphDataValues,
              backgroundColor: sales.graphBarColors,
                
                datalabels: {
                  anchor: 'end',
                  align :'bottom',
                  clamp :true,
                  color:'#000000',
                  display: 'auto',
                  clip :true,
                }
              }
            ],
          }));
          
          const options = computed(() => ({
            scales: {
              
                    y: {
                      min: 0,
                      max: sales.graphHeight+sales.tickLimit,
                      //max: 450000,// this must be dynamic based on highest sale + 100000
                      ticks: {
                          callback: function (value) {
                            //putting £ sign with amount in graph and making values comma separated.
                              value = value.toString();
                              value = value.split(/(?=(?:...)*$)/);
                              value = value.join(',');
                              return `£${value}`;
                          },
                          stepSize: sales.tickLimit,
                          maxTicksLimit:100// dynamic, increase it when sales bar size increase , also increase :height up
                        },
                      
                    },
                    x: {
                      grid: {
                        display: false //hiding verticle lines on graph grid
                      },
                      ticks: {
                          stepSize: 1,
                          maxTicksLimit: 40,// dynamic, increase it when sales increase , also increase :height up
                        },
                      },
                  },
                  // animation: {
                  //   duration: 0
                  // },
                plugins: {
      
                  datalabels: {
                    formatter: function(value, context) {// displaying x-axis values as labels on bars.
                      return context.chart.data.labels[context.dataIndex];
                    },
      
                    textAlign:'center'
                  },
                  legend: {
                    position: "top",
                  },
                  title: {
                    display: true,
                    text: "Daily Sales Chart",
                  },
                },          
          }));
      
      
      const { barChartProps } = useBarChart({
        chartData: SalesBoardData,
        options,
      });
      
      </script>
      
      
      <style scoped>
      #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
      }
      
      @media(max-width: 1880px){
        .barchart{
        width: 1350px;
        margin-left:7%;
      }
      }
      .barchart{
        width: 1350px;
        margin-left:7%;
      }
      
      </style>
      