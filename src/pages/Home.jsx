import { useState } from "react";
import Card from "../components/Card";
import { CHECK_LIST, DUMMY_DATA } from "../constants/dummt.constants";
import { SHEET_API, useChecklist } from "../hooks/useCheckList";

const Home = () => {
    const { data, loading } = useChecklist();
    const [formData, setFormData] = useState({});
    const [viewForm, setViewForm] = useState(false)

    const handleViewForm = () => setViewForm(!viewForm)

    const onSubmit = async () => {
        const payload = {
            date: new Date().toISOString().split("T")[0], // e.g., "2025-08-01"
            checklist: CHECK_LIST.map(label => ({
                label,
                value: formData[label] ?? false,
            })),
        };

        try {
            const res = await fetch(SHEET_API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await res.json();
            if (result.success) {
                alert("Checklist saved to Google Sheet!");
                setViewForm(false);
            }
        } catch (error) {
            console.error("Error saving checklist:", error);
            alert("Failed to save checklist.");
        }
    };

    console.log(data);

    return (
        <div className="h-full min-h-screen space-y-4 bg-home">

            {
                viewForm ? (
                    <div className="space-y-2">
                        {CHECK_LIST.map((item, i) => (
                            <div key={i} className="flex p-2 border border-gray-500 justify-between items-center">
                                <p className="text-xs">{item} :</p>
                                <input
                                    type="checkbox"
                                    checked={formData[item] ?? false}
                                    onChange={(e) =>
                                        setFormData(prev => ({
                                            ...prev,
                                            [item]: e.target.checked
                                        }))
                                    }
                                />
                            </div>
                        ))}

                        <button onClick={onSubmit} className="w-full md:w-fit px-4 py-2 border border-white bg-black text-white flex justify-center items-center">Save</button>

                    </div>
                ) : <div className="w-full flex justify-center">
                    <button onClick={handleViewForm} className="w-full md:w-fit px-4 py-2 border border-gray-400 bg-gray-300 text-black flex justify-center items-center">Add/Edit Todays Checklist</button>
                </div>
            }
            <div className=" grid grid-cols-1 gap-3">
                {
                    loading ? <p>Loading...</p> :
                        data?.map((item, key) => <Card item={item} key={key} />)
                }
            </div>
        </div>
    )
};

export default Home;
