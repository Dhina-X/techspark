import { motion } from "framer-motion";
import { FaStar, FaUserGraduate } from "react-icons/fa";

export default function CourseCard({ course }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
            <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold">{course.title}</h3>
                <p className="text-gray-600">{course.instructor}</p>
                <div className="flex justify-between mt-2">
                    <span className="flex items-center">
                        <FaStar className="text-yellow-500 mr-1" /> {course.rating}
                    </span>
                    <span className="font-bold">${course.price}</span>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Enroll Now
                </button>
            </div>
        </motion.div>
    );
}