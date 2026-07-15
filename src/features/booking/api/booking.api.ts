import apiClient from "@/services/ApiClient";
import { BOOKING_ENDPOINTS } from "@/constants/apiEndpoints";
import type {
  BookingListResponse,
  BookingDetailResponse,
  BookingApiResponse,
  ReschedulePayload,
  Booking,
} from "@/features/booking/types";

export const bookingApi = {
  /** GET /bookings – list all bookings for the authenticated user */
  async listBookings(): Promise<BookingListResponse> {
    return apiClient.get<BookingListResponse>(BOOKING_ENDPOINTS.LIST);
  },

  /** GET /bookings/:id – fetch a single booking's details */
  async getBooking(id: number): Promise<BookingDetailResponse> {
    return apiClient.get<BookingDetailResponse>(BOOKING_ENDPOINTS.DETAIL(id));
  },

  /** PUT /bookings/:id/cancel – cancel an upcoming booking */
  async cancelBooking(id: number): Promise<BookingApiResponse<Booking>> {
    return apiClient.put<BookingApiResponse<Booking>>(
      BOOKING_ENDPOINTS.CANCEL(id),
    );
  },

  /** PUT /bookings/:id/reschedule – reschedule an upcoming booking */
  async rescheduleBooking(
    id: number,
    payload: ReschedulePayload,
  ): Promise<BookingApiResponse<Booking>> {
    return apiClient.put<BookingApiResponse<Booking>>(
      BOOKING_ENDPOINTS.RESCHEDULE(id),
      payload,
    );
  },
};
