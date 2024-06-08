import React from 'react'
import {BsHouse, BsMortarboard, BsPeople, BsCalendar3, BsBoxArrowLeft } from 'react-icons/bs'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function Home() {

    const data = [
        { name: '5', value: 10 },
        { name: '4', value: 30 },
        { name: '3', value: 30 },
        { name: '2', value: 20 },
        { name: '1', value: 2 },
      ];
      
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ff2934'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>KOKPIT</h3>
        </div>
        <div className='main-cards'>
        <div className='card'>
            <div className='cards-inner'>
                <h3>LICZBA UCZNIÓW</h3>
            </div>
            <h1>17</h1>
            </div>
            <div className='card'>
            <div className='cards-inner'>
                <h3>ILOŚĆ OBECNOŚCI</h3>
            </div>
            <h1>15</h1>
            </div>
            <div className='card'>
            <div className='cards-inner'>
                <h3>ILOŚĆ NIEOBECNOŚCI</h3>
            </div>
            <h1>2</h1>
            </div>
        </div>


        <table className='2day_schedule'>
    <thead>
      <tr>
        <th>Hours</th>
        <th>Events</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>8:00 - 8:45</td>
        <td>Event 1
        </td>
      </tr>
      <tr>
      <td>8:55 - 9:40</td>
        <td>Event 2</td>
      </tr>
    </tbody>
  </table>   
        
    </main>
  )
}

export default Home
