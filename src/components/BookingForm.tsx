
import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg transform transition-transform duration-300 z-40">
      <form className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "PPP") : <span>Check-in Date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "PPP") : <span>Check-out Date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Guests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Guest</SelectItem>
              <SelectItem value="2">2 Guests</SelectItem>
              <SelectItem value="3">3 Guests</SelectItem>
              <SelectItem value="4">4 Guests</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Room Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deluxe">Deluxe Room</SelectItem>
              <SelectItem value="premier">Premier Room</SelectItem>
              <SelectItem value="suite">Trident Suite</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Button className="w-full bg-gold hover:bg-gold-dark text-white">
            Check Availability
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
