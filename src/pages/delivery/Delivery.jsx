
import DeliveryTable from './DeliveryTable'

export default function Delivery() {
  return (
      <div id="manage_deliveries_section" className="manage_deliveries_section main_section">
            <h4 className="text-center my-3">مدیریت نحوه ارسال</h4>

                <DeliveryTable/>
        </div>
  )
}
