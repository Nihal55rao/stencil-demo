
export class MyServiceController {
    url: string = 'http://localhost:9000';

  constructor() {}

  async createEmployeeData(newData: any) {
    try {
      const response = await fetch(`${this.url}/employee-data `, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      const result = await response.json();
      return result
    } catch (error) {
      console.error('Error in creating data:', error);
    }
  }

  async fetchEmployeesData() {
    try {
      const response = await fetch(`${this.url}/employee-data`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      return result.data
    } catch (error) {
      console.error('Error in fetching data:', error);
    }
  }

  async updateEmployeeData(id: number, updatedData: any) {
    try {
      const response = await fetch(`${this.url}/employee-data/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      const result = await response.json();
      return result
    } catch (error) {
      console.error('Error in updating data:', error);
    }
  }

  
  async deleteEmployeeData(id: number) {
    try {
      await fetch(`${this.url}/employee-data/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Data deleted');
    } catch (error) {
      console.error('Error in deleting data:', error);
    }
  }

  async getEmployeeDataById(id: number) {
    try {
        const response = await fetch(`${this.url}/employee-data/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        return result.data
      } catch (error) {
        console.error('Error in fetching data:', error);
      }
  }


}

export const MyService = new MyServiceController();