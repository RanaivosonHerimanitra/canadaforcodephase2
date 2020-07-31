import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3array from 'd3-array';
import Plotly from 'plotly.js-dist';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.sass']
})
export class VisualizationComponent implements OnInit {
  public violationPerCategory: any[] = [];
  public earliestViolationPerCategory: any[] = [];
  public latestViolationPerCategory: any[] = [];

  constructor() { }

  ngOnInit(): void {
    d3.csv('assets/C4C-dev-challenge-2018.csv').then((data) => {
      const subsetArray = data.map(d =>  {
        return { violation_id: d.violation_id, violation_category: d.violation_category}
      });
      this.violationPerCategory = d3array.group(subsetArray, d => d.violation_category);
      this.generateHistogram(Array.from(this.violationPerCategory));
      Array.from(this.violationPerCategory).map(violation => {
        const tmp = data.filter(data => data.violation_category === violation[0]);
        const minMax = d3.extent(tmp, function(d) { return d.violation_date; });
        const minObject = {category: violation[0], minDate: minMax[0]};
        const maxObject = {category: violation[0], maxDate: minMax[1]};
        this.earliestViolationPerCategory.push(minObject);
        this.latestViolationPerCategory.push(maxObject);
      });
      this.generateGroupedBarchart(this.earliestViolationPerCategory, this.latestViolationPerCategory);
    });
  }

  public generateHistogram(data: any[]): void{
    const trace = {
      type: 'bar',
      x: data.map(d => d[0]),
      y:  data.map(d => d[1].length),
      marker: {
          color: 'steelblue',
          line: {
              width: 1.5
          }
      }
    };
    const layout = {
      title: '',
      font: {size: 11}
    };
    const config = {responsive: true}
    Plotly.newPlot('histogram', [trace], layout, config );
  }

  public generateGroupedBarchart(datamin: any[], datamax: any[]): void {
    const trace1 = {
      x: datamin.map(d => d.category),
      y: datamin.map(d => d.minDate),
      name: 'Min. Date',
      type: 'bar'
    };
    const trace2 = {
      x: datamax.map(d => d.category),
      y: datamax.map(d => d.maxDate),
      name: 'Max. Date',
      type: 'bar'
    };
    const layout = {barmode: 'group',  font: {size: 11}};

    Plotly.newPlot('minMax', [trace1, trace2], layout);
  }
}
