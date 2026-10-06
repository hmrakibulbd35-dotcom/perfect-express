import axios from 'axios';

interface SteadfastOrderData {
  invoice: string;
  recipient_name: string;
  recipient_phone: string;
  recipient_address: string;
  cod_amount: number;
  note?: string;
}

export class SteadfastService {
  private static baseURL = process.env.STEADFAST_API_URL || 'https://portal.steadfast.co.bd/api/v1';
  private static apiKey = process.env.STEADFAST_API_KEY || '';
  private static secretKey = process.env.STEADFAST_SECRET_KEY || '';

  // 1. Create Courier Order
  public static async createOrder(orderData: SteadfastOrderData) {
    try {
      const response = await axios.post(
        `${this.baseURL}/create_order`,
        orderData,
        {
          headers: {
            'Api-Key': this.apiKey,
            'Secret-Key': this.secretKey,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error: any) {
      console.error('Steadfast Create Order Error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to create Steadfast courier order');
    }
  }

  // 2. Check Delivery Status by Tracking Code / Consignment ID
  public static async checkStatusByTrackingCode(trackingCode: string) {
    try {
      const response = await axios.get(
        `${this.baseURL}/status_by_trackingcode/${trackingCode}`,
        {
          headers: {
            'Api-Key': this.apiKey,
            'Secret-Key': this.secretKey,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      console.error('Steadfast Status Check Error:', error.response?.data || error.message);
      throw new Error('Failed to fetch tracking status');
    }
  }

  // 3. Get Current Balance
  public static async getBalance() {
    try {
      const response = await axios.get(`${this.baseURL}/get_balance`, {
        headers: {
          'Api-Key': this.apiKey,
          'Secret-Key': this.secretKey,
        },
      });
      return response.data;
    } catch (error: any) {
      console.error('Steadfast Balance Check Error:', error.response?.data || error.message);
      throw new Error('Failed to fetch merchant balance');
    }
  }
}