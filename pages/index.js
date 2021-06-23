import React from 'react'
import axios from 'axios'
import 'tailwindcss/tailwind.css'

    export default class Form extends React.Component {

        state={
            tableData : [],
            jobCount : 0
        }

        componentDidMount(){
            console.log("hi")
            axios.get(`http://localhost:3000/api/jobs`)
      .then(res => {
        //console.log(res.data.jobs)
        const newJobCount = res.data.jobs.reduce((sum,element) =>{
            console.log(element.total_jobs_in_hospital)
            return sum+element.total_jobs_in_hospital;
            
        },0 )
        console.log(newJobCount)
        this.setState({
            tableData : res.data.jobs,
            jobCount : newJobCount
        })
      })
        }

        render () {

        const tableView = this.state.tableData.map((element) => {

            const logo = element.name.slice(0,2);


            return ( <div style={{display:'flex'}}>
                <div className="text-center box-border mx-4 my-1 h-7 w-7 p4 bg-gray-200 rounded-lg">{logo}</div>
                {` ${element.total_jobs_in_hospital} jobs for ${element.name}`}
            </div>)
           
        })

        
            return (
              <div className="md:container md:mx-auto">
                  <div>
                      {this.state.jobCount} job Postings
                  </div>
                  <br></br>
                  {tableView}    
              </div>
            )
          }
        }
// const Index = () => (
// <div class="md:container md:mx-auto">
//  Hi
// </div>
// )
// export default Index
