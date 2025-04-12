import java.util.Scanner;

public class InsulinDosageCalculator {

    // calculate insulin for covering carbs
    public static double calculateCarbInsulin(double carbs, double insulinToCarbRatio) {
        return carbs / insulinToCarbRatio;
    }

    // calculate insulin for correcting blood glucose
    public static double calculateCorrectionInsulin(double currentBloodGlucose, double targetBloodGlucose,
            double sensitivityFactor) {
        return (currentBloodGlucose - targetBloodGlucose) / sensitivityFactor;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of carbohydrates (in grams): ");
        double carbs = scanner.nextDouble();

        System.out.print("Enter the insulin-to-carb ratio (e.g., 15 for 1 unit per 15g): ");
        double insulinToCarbRatio = scanner.nextDouble();

        System.out.print("Enter the current blood glucose level (in mg/dL): ");
        double currentBloodGlucose = scanner.nextDouble();

        System.out.print("Enter the target blood glucose level (in mg/dL): ");
        double targetBloodGlucose = scanner.nextDouble();

        System.out.print("Enter the insulin sensitivity factor (e.g., 50 for 1 unit reducing glucose by 50 mg/dL): ");
        double sensitivityFactor = scanner.nextDouble();

        // insulin for carbs
        double insulinForCarbs = calculateCarbInsulin(carbs, insulinToCarbRatio);

        // insulin for correction
        double correctionInsulin = calculateCorrectionInsulin(currentBloodGlucose, targetBloodGlucose,
                sensitivityFactor);

        // total insulin dosage
        double totalInsulinDosage = insulinForCarbs + correctionInsulin;

        System.out.println("\n--- Insulin Dosage Calculation ---");
        System.out.println("Insulin for carbs: " + insulinForCarbs + " units");
        System.out.println("Insulin for correction: " + correctionInsulin + " units");
        System.out.println("Total insulin dosage: " + totalInsulinDosage + " units");

        scanner.close();
    }
}
