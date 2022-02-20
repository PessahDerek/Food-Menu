import React from 'react'

function Payout() {
  return (
    <div>
        <div className="payoutForm">
            <form>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type='tel' />
                </div>
                <div>
                    <label>Total</label>
                    <input type="number" />
                </div>
                <div><p>When you press Order, you will get an M-Pesa prompt to Payout
                    You can the print your receipt</p></div>
                <div>
                    <button type="button">Order</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Payout