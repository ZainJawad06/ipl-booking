import { useState } from "react";
import { supabase } from "../Supabase";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  async function getBookings() {
    const { data, error } = await supabase
      .from("bookings")
      .select("*");

    if (error) {
      console.error(error);
      alert("Failed to retrieve bookings: " + error.message);
      return;
    }

    setBookings(data || []);
  }

  return (
    <main className="history-page">
      <h1>Booking History</h1>

      <button className="history-button" onClick={getBookings}>
        View Bookings
      </button>

      <div className="history-table-wrapper">
        <table className="history-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Tickets</th>
              <th>Stand</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                  No bookings found. Click &quot;View Bookings&quot; to fetch history.
                </td>
              </tr>
            ) : (
              bookings.map((booking, index) => (
                <tr key={booking.id || index}>
                  <td>{booking.name}</td>
                  <td>{booking.tickets}</td>
                  <td>{booking.stand}</td>
                  <td>{booking.venue}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default BookingHistory;
