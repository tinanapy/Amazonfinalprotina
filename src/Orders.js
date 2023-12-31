import React, { useEffect, useState } from 'react'
import './Orders.css'
import { useStateValue } from './Stateprovider';
import { db } from './Firebase';
import Order from './Order';
function Orders() {

    const [orders, setOrders] = useState([]);
    const [{ basket, user }, dispatch] = useStateValue();
    useEffect(() => {
        if (user) {
            db.collection("users")
              .doc(user?.uid)
              .collection("orders")
              .orderBy("created", "desc") //desc means decending orders
              .onSnapshot((snapshot) =>
                setOrders(
                  snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                  }))
                )
              );
        } else {
            setOrders([]);
        }
    },[user])
  return (
    <div className="orders">
      <h1>your Orders</h1>
      <div className="orders__order">
        {orders?.map(order => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders